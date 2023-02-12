import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/outline";
import { useNearestMatch } from "@tanstack/react-router";
import { Fragment, PropsWithChildren, ReactNode } from "react";
import useSidebar from "../../hooks/useSidebar";
import Navbar from "../navbar/navbar";

interface PageProps {
  title: string;
  children: [ReactNode, ReactNode];
  tabs?: ReactNode;
}

function Page({ title, children, tabs }: PageProps) {
  const { toggle } = useSidebar();
  const header = (
    <Navbar
      leftButton={{
        type: "button",
        icon: Bars3CenterLeftIcon,
        onClick: toggle,
      }}
      title={title}
      tabs={tabs}
    >
      {children[0]}
    </Navbar>
  );
  return (
    <>
      {header}
      <div className="py-16">{children[1]}</div>
    </>
  );
}

type ModalPageProps = {
  title: string;
};
export function ModalPage({
  title,
  children,
}: ModalPageProps & PropsWithChildren) {
  const { navigate } = useNearestMatch();

  const onClickBack = () => {
    navigate({
      to: "../",
      search: {},
      params: {},
    });
  };

  const header = (
    <Navbar
      leftButton={{ type: "button", icon: ArrowLeftIcon, onClick: onClickBack }}
      title={title}
    ></Navbar>
  );
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClickBack}>
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
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          entered="overflow-x-auto"
          leave="ease-in duration-200"
          leaveFrom="-translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="fixed inset-0">
            <div className="flex max-w-full min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full py-16 text-left align-middle transition-all transform bg-white shadow-xl dark:bg-[#242424]">
                  {header}
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

export default Page;
