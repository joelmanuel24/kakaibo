import { Menu, Transition } from "@headlessui/react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useMatch } from "@tanstack/react-router";
import React, { Fragment, useState } from "react";
import { useQueryParams } from "../../hooks/useQueryParams";
import { indexRoute } from "../../pages";

function RadialButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { navigate } = useMatch(indexRoute.id);
  const { set } = useQueryParams();

  const subButtonsClasses = isOpen
    ? "w-64 h-64 rounded-full"
    : "w-12 h-12 rounded-xl";
  return (
    <div className="relative z-30 flex items-center px-3 py-3 text-cyan-50">
      <div
        className={`absolute transition-all scale-100 bg-cyan-900 ${subButtonsClasses} left-[50%] translate-x-[-50%] shadow-md`}
      ></div>
      <Transition appear show={isOpen} as="div">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0 -top-8"
          enterTo="opacity-100 -top-20"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 -top-20"
          leaveTo="opacity-0 -top-8"
        >
          <button
            className="absolute left-[50%] translate-x-[-50%] text-center"
            onClick={() => {
              set("addExpense", "open");
              setIsOpen(false);
            }}
          >
            <div>
              <MinusCircleIcon className={`w-6 h-6 m-auto`} />
            </div>
            <div className="text-xs">Expense</div>
          </button>
        </Transition.Child>
      </Transition>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0 -left-8"
          enterTo="opacity-100 -left-20"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 -left-20"
          leaveTo="opacity-0 -left-8"
        >
          <button className="absolute top-[50%] translate-y-[-50%] text-center">
            <div>
              <PlusCircleIcon className={`w-6 h-6 m-auto`} />
            </div>
            <div className="text-xs">Income</div>
          </button>
        </Transition.Child>
      </Transition>
      <button onClick={() => setIsOpen((v) => !v)}>
        <PlusIcon
          className={`w-6 h-6 transition-all ${
            isOpen ? "rotate-45 scale-[.75]" : "-rotate-180"
          }`}
        />
      </button>
    </div>
  );
}

export default RadialButton;
