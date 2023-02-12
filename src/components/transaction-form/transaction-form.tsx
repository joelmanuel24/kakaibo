import { ChevronUpDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import _default from "react-hook-form/dist/logic/appendErrors";
import { SubmitHandler } from "react-hook-form/dist/types";
import EditableText from "../editable-text/editable-text";
import { EmojiIcon } from "../emoji-button";
import InputGroup from "../input-group/input-group";
import Switch from "../switch/switch";
import Tag from "../tag/tag";
import _ from "lodash";
import MultiSelect from "../multi-select/multi-select";
import {
  AddTransactionCommandSchema,
  AddTransactionCommandType,
} from "../../module/transactions/commands/add-transaction-command";
import { z } from "zod";
import { PaymentMethod } from "../../data/entities/PaymentMethod";

const InputSchema = z.object({
  amount: z.number(),
  remarks: z.string().optional(),
  tags: z.array(z.string()).optional(),
  share: z.array(
    z.object({
      personName: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          amount: z.number(),
        })
      ),
    })
  ),
  payment: z.number(),
});

type Inputs = z.infer<typeof InputSchema>;

type TransactionFormProps = {
  paymentMethods: Array<PaymentMethod>;
  defaultValue?: Inputs;
  onSubmit(data: AddTransactionCommandType): void;
};
function TransactionForm(props: TransactionFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: props.defaultValue,
  });
  const { fields, remove, append } = useFieldArray({ control, name: "share" });
  const [selectedTags, setSelectedTags] = React.useState<Array<string>>([
    "Baguio 2022",
  ]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const share = data.share.map((s) => {
      return {
        ...s,
        items: s.items.filter(
          (item, index) =>
            !deletedIds.some(
              (d) =>
                fields.find((f) => f.id === d[0])?.personName ===
                  s.personName && d[1] === index
            )
        ),
      };
    });
    var dataSubmit = {
      ...data,
      share: shared ? share : [],
      tags: selectedTags,
      payment: 1,
      tranType: 1,
    };

    props.onSubmit(dataSubmit);
  };
  const personNameRef = React.useRef<HTMLInputElement | null>(null);
  const [shared, setShared] = React.useState(false);
  const [payment, setPayment] = React.useState(0);
  const [deletedIds, setDeletedIds] = React.useState<Array<[string, number]>>(
    []
  );

  const handleDeleteSharedItem = (id: string, index: number) => {
    const fieldIndex = fields.findIndex((f) => f.id === id);

    if (fields[fieldIndex].items.length === 1) {
      remove(fieldIndex);
    }

    var nextDeletedLength = deletedIds.filter((d) => d[0] === id).length + 1;

    if (nextDeletedLength === fields[fieldIndex].items.length) {
      remove(fieldIndex);
    } else {
      setDeletedIds((old) => [...old, [id, index]]);
    }
    if (nextDeletedLength == 0) {
      remove(fieldIndex);
    }
  };

  const getSharedItemError = (
    gIndex: number,
    itemIndex: number,
    field: "name" | "amount"
  ) => {
    if (errors && errors.share) {
      var group = errors.share[gIndex];
      if (group && group.items) {
        const item = group.items[itemIndex];
        if (item) {
          return item[field]?.message;
        }
      }
    }
    return null;
  };

  const sharedNode = shared ? (
    <div className="grid grid-cols-4 px-6 gap-x-1 gap-y-2">
      {fields.map((group, gIndex) => (
        <>
          <div
            className="col-span-3 text-sm font-medium text-gray-500"
            key={`personName-${gIndex}`}
          >
            {group.personName}
          </div>
          <div
            className="text-sm font-medium text-right text-cyan-500"
            key={`addItem-${gIndex}`}
          >
            <button onClick={() => group.items.push({ name: "", amount: 0 })}>
              Add Item
            </button>
          </div>
          {group.items.map((item, index) => {
            if (deletedIds.some((d) => d[0] === group.id && d[1] === index)) {
              return null;
            }
            return (
              <>
                <div
                  className="col-span-2 text-sm"
                  key={`itemName-${gIndex}-${index}`}
                >
                  <input
                    type="text"
                    {...register(`share.${gIndex}.items.${index}.name`, {
                      required: {
                        value: true,
                        message: "Item Name is required",
                      },
                    })}
                    autoComplete="off"
                    className={`w-full h-6 px-2 -mx-2 bg-transparent rounded outline-none focus:bg-gray-500/30 border border-transparent
                      ${
                        getSharedItemError(gIndex, index, "name")
                          ? "border-red-800"
                          : ""
                      }
                    `}
                  />
                </div>
                <div
                  className="flex items-center col-span-2 text-sm"
                  key={`amount-${gIndex}-${index}`}
                >
                  <input
                    type="number"
                    {...register(`share.${gIndex}.items.${index}.amount`, {
                      required: {
                        value: true,
                        message: "Item Amount is required",
                      },
                      valueAsNumber: true,
                    })}
                    step="any"
                    className={`w-full h-6 px-2 -mx-2 bg-transparent rounded outline-none focus:bg-gray-500/30 border border-transparent text-right
                      ${
                        getSharedItemError(gIndex, index, "amount")
                          ? "border-red-800"
                          : ""
                      }
                    `}
                  />
                  <button
                    type="button"
                    className="ml-2"
                    onClick={() => handleDeleteSharedItem(group.id, index)}
                  >
                    {" "}
                    <XMarkIcon className="inline-block w-5 h-5 text-red-800" />
                  </button>
                </div>
              </>
            );
          })}
        </>
      ))}

      <div id="frmAddPerson" className="col-span-4 py-3 text-right">
        <label className="flex py-1 pl-3 pr-1 rounded bg-gray-500/10">
          <input
            type="text"
            className="flex-1 text-sm bg-transparent outline-none"
            placeholder="Person Name..."
            ref={personNameRef}
          />
          <button
            type="button"
            className="px-2 py-1 text-xs font-medium rounded bg-gray-500/25"
            onClick={(e) => {
              e.preventDefault();
              if (personNameRef.current?.value) {
                append({
                  personName: personNameRef.current.value,
                  items: [{ name: "", amount: 0 }],
                });
                personNameRef.current.value = "";
              }
            }}
          >
            Add Person
          </button>
        </label>
      </div>
    </div>
  ) : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex px-5 pt-5">
        <EmojiIcon emoji="🍟" color="#969661" as="div" size="xl" />
        <div className="flex-1 ml-3">
          <InputGroup
            type="number"
            leftContent={{ type: "text", text: "PHP" }}
            label="Food"
            inputClassName="text-right"
            autoFocus
            error={errors.amount}
            {...register("amount", {
              required: { value: true, message: "Amount is required" },
              valueAsNumber: true,
            })}
          />
        </div>
      </div>
      <div className="px-5">
        <InputGroup label="Remarks" {...register("remarks")} />
      </div>

      <div className="px-5">
        <div className="mt-2 mb-1 text-sm font-medium text-gray-500">Tags</div>
        <MultiSelect
          selected={selectedTags}
          onChangeItems={setSelectedTags}
          items={[
            "Baguio 2022",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
          ]}
          onFilter={(q, item) =>
            item.toLocaleLowerCase().includes(q.toLocaleLowerCase())
          }
          onRenderOption={(option) => option}
          onRenderSelected={(val) => <Tag as="span" iconSize="md" text={val} />}
          comparison={(x, y) => x === y}
        />
      </div>

      <div className="mt-6 my-3 bg-gray-500/10 dark:bg-[#202020]">
        <div className="flex items-center justify-between px-6 py-2">
          <span className="text-sm font-medium text-gray-500">Shared</span>
          <Switch enabled={shared} onChange={setShared} />
        </div>
        {sharedNode}
      </div>

      <div className="fixed bottom-0 inset-x-0 flex justify-between px-6 py-3 dark:bg-[#363636]/50 backdrop-blur">
        <button className="flex items-center py-2 pl-3 pr-2 -ml-3 text-sm font-medium rounded">
          <div className="text-left">
            <div className="text-xs text-gray-500">Payment Method:</div>
            <div className="leading-4">
              {props.paymentMethods[payment].name}
            </div>
          </div>
          <ChevronUpDownIcon className="w-6 h-6 ml-2" />
        </button>
        <div className="flex items-center">
          <button
            type="submit"
            className="px-3 py-2 text-sm font-medium rounded bg-cyan-900 text-cyan-50"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
