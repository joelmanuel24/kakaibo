import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { money } from "../../utils";

const MoneyHeader = ({ value }: { value: number }) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="flex px-2 items-center">
      <div className="text-4xl flex-1 font-money">
        {hide ? <span>PHP •••••••</span> : <span>{money(value)}</span>}
      </div>
      <div>
        <button className="p-1" onClick={() => setHide((v) => !v)}>
          {hide ? (
            <EyeSlashIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <EyeIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MoneyHeader;
