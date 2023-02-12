import React, { useState } from "react";

function EditableTextInner(
  props: React.HTMLProps<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const spanRef = React.useRef<HTMLSpanElement>(null);
  let inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(props.value);
  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    // ref.current?.addEventListener("change", () => console.log("test"));
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  React.useEffect(() => {
    setWidth(spanRef.current?.offsetWidth ?? 0);
  }, [props.value]);

  const focusInput = () => {
    // console.log(ref);
    // console.log(inputRef);
    // console.log(testRef);
    props.itemRef;
    // inputRef.current?.select();
    spanRef.current?.removeEventListener("click", focusInput);
  };

  return (
    <div className="relative -mx-2">
      {/* <span
        ref={spanRef}
        className="px-2 absolute top-0 left-0 whitespace-nowrap text-transparent"
        onClick={focusInput}
      >
        {value}
      </span> */}
      <input
        autoComplete="off"
        ref={ref}
        // value={value}
        // onChange={handleOnChange}
        className="px-2 rounded bg-transparent focus:bg-gray-500/10 focus:outline-none w-full z-[1]"
        // style={{ width }}
        {...props}
      />
    </div>
  );
}

const EditableText = React.forwardRef(EditableTextInner);

export default EditableText;
