import { Switch as HeadlessUISwitch } from "@headlessui/react";

type SwitchProps = {
  enabled?: boolean;
  onChange(val: boolean): void;
};
function Switch({ enabled, onChange }: SwitchProps) {
  return (
    <HeadlessUISwitch
      checked={enabled}
      onChange={onChange}
      className={`${enabled ? "bg-cyan-900" : "bg-gray-500"}
          relative inline-flex h-[26px] w-[42px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </HeadlessUISwitch>
  );
}

export default Switch;
