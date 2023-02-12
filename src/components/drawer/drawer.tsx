import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface DrawerProps extends React.PropsWithChildren {
  isOpen?: boolean;
  onClose(): void;
}

function Drawer({ children, isOpen, onClose }: DrawerProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          entered="overflow-x-auto"
          leave="ease-in duration-200"
          leaveFrom="-translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="fixed inset-y-0">
            <div className="flex min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="max-w-md py-10 text-left align-middle transition-all transform bg-white shadow-xl dark:bg-gray-700 w-72">
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Drawer;
