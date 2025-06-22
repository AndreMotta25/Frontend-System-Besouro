"use client";

import Checklist from "@/icons/Checklist";
import Hat from "@/icons/Hat";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { BesouroIcon } from "@/icons/BesouroIcon";
import { IProjectCard } from "@/interfaces/ProjectsInterface";
import { DollarSign } from "lucide-react";

interface ProjectsCardProps {
  project: IProjectCard;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
  const defaultProjectStatus: number = project.progressValue;
  const path = usePathname();

  const secundaryColor = project.secondAccentColor ?? project.accentColor;

  const iconStyle = {
    icons: {
      color: secundaryColor,
    },
  };

  const router = useRouter();

  const redirectToDetails = () => {
    if (path === "/projects") {
      router.push(`/projects/${project.projectId}`);
    } else {
      router.push(`/sectors/finance/budgets/${project.projectId}`);
    }
  };

  const getTextForValue = (key: string): string => {
    switch (key) {
      case "subscribers":
        return "Inscritos";
      case "incubateds":
        return "Incubados";
      case "budget":
        return "Orçamento";
      case "amountSpent":
        return "Valor Gasto";
      default:
        return "";
    }
  };

  const getIconForValue = (key: string): any => {
    switch (key) {
      case "subscribers":
        return <Checklist className="icons" style={iconStyle.icons} />;
      case "incubateds":
        return <Hat className="icons" style={iconStyle.icons} />;
      case "budget":
        return <Checklist className="icons" style={iconStyle.icons} />;
      case "amountSpent":
        return <DollarSign className="icons" style={iconStyle.icons} />;
      default:
        return "";
    }
  };

  return (
    <div
      className={`project-card w-full h-[400px] group transition ease-in-out delay-75 hover:-translate-y-2 group ${
        path !== "/projects" ? "bg-black/70" : "bg-[#033745]"
      } shadow-2xl dark:bg-gray-800 flex flex-col justify-between rounded-3xl mt-12`}
    >
      <div className="project-banner flex justify-center items-center w-full rounded-t-3xl h-3/5 bg-white dark:bg-gray-900">
        {project.projectLogo != null ? (
          <img
            className="max-w-56 max-h-60 rounded-t-3xl select-none"
            src={project.projectLogo}
            alt="Logo"
          />
        ) : (
          <div className="flex flex-col p-4 text-center justify-center items-center gap-2 font-semibold ">
            <BesouroIcon className="md:w-6 md:h-12 w-4 h-10" />
            <label className="dark:text-white">{project.name}</label>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col bg-[#C3C6CB30] dark:bg-gray-800 rounded-b-3xl h-2/5 p-4 justify-between">
        <div className="progres-bar flex flex-row items-center w-full">
          <div className="h-1 w-[90%] rounded-full bg-neutral-200 dark:bg-neutral-600">
            <div
              className="h-1"
              style={{
                background: project.accentColor,
                width: `${defaultProjectStatus}%`,
              }}
            ></div>
          </div>

          <span className="ml-[1rem] text-white">{defaultProjectStatus}%</span>
        </div>

        <div className="project-bottom-details gap-3 text-white flex flex-col justify-between">
          {project.values &&
            Object.entries(project.values).map(([key, value]) => (
              <div key={key} className="flex flex-row items-center">
                {getIconForValue(key)}
                <span className="ml-5 font-bold dark:text-white">
                  {value} {getTextForValue(key)}
                </span>
              </div>
            ))}

          <div className="flex">
            <button
              onClick={() => redirectToDetails()}
              className="bg-white dark:bg-gray-900 w-36 h-9 rounded-full cursor-pointer border-[#033745] hover:scale-105"
            >
              <span className="text-black dark:text-white">Abrir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
