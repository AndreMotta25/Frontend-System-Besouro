import { CircleUserRound, ChevronRight } from "lucide-react";

interface CollaboratorCardProps {
  colabName: string;
  colabRole: string;
  colabPhoto: any;
}

const CollaboratorCard = (props: CollaboratorCardProps) => {
  return (
    <div className="w-full group rounded-2xl p-2 flex flex-row bg-white dark:bg-gray-900 hover:text-white hover:bg-bgHouverOrange dark:hover:bg-bgHouverOrange justify-between items-center">
      <div className="justify-start items-center flex flex-row gap-3">
        {props.colabPhoto ? (
          <img className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-3xl select-none" src={props.colabPhoto} />
        ) : (
          <CircleUserRound className="w-12 h-12 text-gray-400 group-hover:text-white dark:text-white select-none" />
        )}
        <div className="w-full flex flex-col dark:text-white">
          <span className="font-semibold">{props.colabName}</span>
          <span className="text-xs">{props.colabRole}</span>
        </div>
      </div>
      <ChevronRight className="text-gray-950 group-hover:text-white dark:text-white" />
    </div>
  );
};

export default CollaboratorCard;
