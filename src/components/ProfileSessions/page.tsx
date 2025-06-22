import { Skeleton } from "../UI/skeleton";
import ProfileGeneralData from "./ProfileGeneralData/page";
import ProfileSettings from "./ProfileSettings/page";
import ProfileTeam from "./ProfileTeam/ProfileTeam";

type SessionType = "general-data" | "settings" | "support" | "team";

interface ProfileSessionsProps {
  session: SessionType;
  user: any;
}

const ProfileSessions = ({ session, user }: ProfileSessionsProps) => {
  const toggleProfileSessions = (session: SessionType) => {
    switch (session) {
      case "general-data":
        return <ProfileGeneralData user={user} />;
      case "settings":
        return <ProfileSettings user={user} />;
      case "support":
        return <>Ajuda</>;
      case "team":
        return <ProfileTeam />
      default:
        break;
    }
  };

  return user ? (
    <div className="h-full rounded-2xl shadow-xl w-[900px] max-w-[900px] bg-white dark:bg-gray-800 dark:text-white p-8 overflow-y-auto">
      {toggleProfileSessions(session)}
    </div>
  ) : (
    <Skeleton className="h-full w-[900px]" />
  );
};

export default ProfileSessions;
