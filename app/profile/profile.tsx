import type { FC } from "react";

interface ProfileProps {
  name: string;
  className?: string;
}

export const Profile: FC<ProfileProps> = ({ name, className }) => {
  return (
    <div className={`${className} ml-auto flex items-center gap-2 text-start text-teal-600`}>
      {/* Profile icon */}
      <div className="h-12 w-12 rounded-full bg-slate-200" />
      <div>
        <div className="text-lg leading-tight">{name}</div>
        <div className="text-xs leading-tight text-slate-400">Rating: 2000</div>
      </div>
    </div>
  );
};
