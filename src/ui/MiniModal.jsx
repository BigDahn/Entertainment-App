import { TrashIcon } from "@heroicons/react/16/solid";
import { EyeIcon, PencilIcon } from "@heroicons/react/20/solid";

function MiniModal({ onClick: onOpenId }) {
  console.log(onOpenId);
  return (
    <div className="bg-white shadow-sm w-[110px]   flex flex-col gap-0.5 items-start px-3 py-2 rounded-sm">
      <h3
        className="text-[12px] flex gap-1.5 items-center text-gray-500"
        onClick={() => onOpenId()}
      >
        <EyeIcon className="size-3 text-gray-400" role="button" />
        See Details
      </h3>
      <h3 className="text-[12px] flex gap-1.5 items-center text-blue-900">
        <PencilIcon className="size-3 text-blue-900" />
        Edit
      </h3>
      <h3 className="text-[12px] flex gap-1.5 items-center text-red-600">
        <TrashIcon className="size-3 text-red-500" />
        Delete
      </h3>
    </div>
  );
}

export default MiniModal;
