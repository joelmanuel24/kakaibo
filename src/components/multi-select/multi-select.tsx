import { Combobox } from "@headlessui/react";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  PlusCircleIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { setWith } from "lodash";
import React, { ReactNode, useRef } from "react";
import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props<T> extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  items: Array<T>;
  selected: Array<T>;
  onChangeItems(obj: T[]): void;
  onRenderSelected(selected: T): ReactNode;
  onRenderOption(option: T): ReactNode;
  onFilter(query: string, item: T): boolean;
  onCreate?(value: string): void;
  comparison(x: T, y: T): boolean;
}
function MultiSelect<T>(
  {
    items,
    error,
    className,
    onRenderSelected,
    onRenderOption,
    onFilter,
    selected,
    onChangeItems,
    comparison,
    ...rest
  }: Props<T>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const spanRef = useRef<HTMLSpanElement>(null);
  // const [selected, setSelected] = React.useState<Array<T>>(propsSelected);
  const [query, setQuery] = React.useState("");
  const [width, setWidth] = React.useState(10);
  const [onDelete, setDelete] = React.useState(false);

  React.useEffect(() => {
    let currentWidth = spanRef.current?.offsetWidth!;
    setWidth(currentWidth > 10 ? currentWidth : 10);
  }, [query]);

  const tagIcon = (
    <span className="inline-block m-1 text-gray-500">
      <TagIcon className="w-6 h-6" />
    </span>
  );

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (query === "" && e.key === "Backspace") {
      if (selected.length > 0 && !onDelete) {
        setDelete(true);
        console.log("test");
        return;
      }
      onChangeItems(selected.slice(0, -1));
      setDelete(false);
    } else {
      setDelete(false);
    }
  };

  const handleOnChange = (values: T[]) => {
    if (selected) onChangeItems(values);
    setQuery("");
  };

  const selectedItems = selected.length > 0 && (
    <>
      {selected.map((value, index) => {
        const tobeDeleted = index === selected.length - 1 && onDelete;

        return (
          <span
            key={index}
            className={`mx-0.5 my-0.5 inline-block ${
              tobeDeleted ? "outline outline-1 outline-cyan-700 rounded-md" : ""
            }`}
          >
            {onRenderSelected(value)}
          </span>
        );
      })}
    </>
  );

  const createdItems = selected.filter(
    (s) => !items.some((i) => comparison(s, i))
  );

  const filteredItems = [...items, ...createdItems].filter((f) =>
    onFilter(query, f)
  );

  const options = filteredItems.map((item, index) => (
    <Combobox.Option key={index} value={item}>
      {({ selected, active }) => (
        <div
          className={`flex items-center px-3 py-2 text-sm font-medium ${
            active ? "bg-cyan-600" : ""
          } ${selected ? "" : "px-11"}`}
        >
          {selected ? <CheckIcon className="w-5 h-5 mr-3" /> : ""}
          {onRenderOption(item)}
        </div>
      )}
    </Combobox.Option>
  ));

  return (
    <label className="cursor-text">
      <Combobox multiple value={selected} onChange={handleOnChange}>
        <div className="relative flex px-1 py-1 rounded bg-gray-500/10">
          {tagIcon}
          <div>
            {selectedItems}
            <div className="relative inline-block mx-1 my-1">
              <Combobox.Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleKeyUp}
                className="inline-block bg-transparent outline-none"
                style={{ width: `${width}px` }}
                autoComplete="off"
                maxLength={25}
              />
              <span
                ref={spanRef}
                className="absolute top-0 left-0 text-transparent whitespace-pre"
              >
                {query}
              </span>
            </div>
          </div>
          <Combobox.Options className="rounded absolute w-full mt-3 shadow py-2 bg-white dark:bg-[#202020] z-10 left-0 -bottom-1 translate-y-full max-h-60 overflow-y-auto">
            {options.length > 0 ? (
              options
            ) : (
              <Combobox.Option value={query}>
                {({ selected, active }) => (
                  <div
                    className={`flex items-center px-3 py-2 text-sm font-medium ${
                      active ? "bg-cyan-600" : ""
                    } `}
                  >
                    <PlusCircleIcon className="w-5 h-5 mr-3" />
                    Create "{query}"
                  </div>
                )}
              </Combobox.Option>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </label>
  );
}

export default MultiSelect;
