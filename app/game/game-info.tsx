import { Profile } from "../profile/profile";
import { CircleIcon } from "./assets/svg/circle-icon";
import { CrossIcon } from "./assets/svg/cross-icon";
import { SquareIcon } from "./assets/svg/square-icon";
import { TriangleIcon } from "./assets/svg/triangle-icon";

interface GameInfoProps {
  className?: string;
}

export const GameInfo = ({ className }: GameInfoProps) => {
  return (
    <div className={`${className} shadow-xs grid grid-cols-2 gap-4 rounded-2xl bg-white px-8 py-4`}>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="shadow-xs absolute -left-px -top-px flex h-5 w-5 items-center justify-center rounded-full bg-white p-1">
            <CrossIcon />
          </div>
          <Profile className="w-44" name="Ghost" />
        </div>
        <span className="h-6 w-px bg-slate-200" />
        <span className="text-lg font-semibold text-slate-900">00:40</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-orange-600 text-slate-900">00:04</span>
        <span className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <div className="shadow-xs absolute -left-px -top-px flex h-5 w-5 items-center justify-center rounded-full bg-white p-1">
            <CircleIcon />
          </div>
          <Profile className="w-44" name="XRay" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="shadow-xs absolute -left-px -top-px flex h-5 w-5 items-center justify-center rounded-full bg-white p-1">
            <TriangleIcon />
          </div>
          <Profile className="w-44" name="Zemphira" />
        </div>
        <span className="h-6 w-px bg-slate-200" />
        <span className="text-lg font-semibold text-slate-900">00:40</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-slate-900">00:40</span>
        <span className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <div className="shadow-xs absolute -left-px -top-px flex h-5 w-5 items-center justify-center rounded-full bg-white p-1">
            <SquareIcon />
          </div>
          <Profile className="w-44" name="Dodik" />
        </div>
      </div>
    </div>
  );
};
