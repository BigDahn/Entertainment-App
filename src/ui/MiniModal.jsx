import { TrashIcon } from "@heroicons/react/16/solid";
import { PencilIcon } from "@heroicons/react/20/solid";

function MiniModal() {
  return (
    <div className="bg-white/100 shadow-sm w-[110px]  flex flex-col items-start px-3 py-1 rounded-sm">
      <h3 className="text-[13px] flex gap-2 items-center text-blue-900">
        <PencilIcon className="size-3 text-blue-900" />
        Edit
      </h3>
      <h3 className="text-[13px] flex gap-2 items-center text-red-600">
        <TrashIcon className="size-3 text-red-500" />
        Delete
      </h3>
    </div>
  );
}

export default MiniModal;
