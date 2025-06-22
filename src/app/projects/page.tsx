import PageLayout from "@/app/pageLayout";
import { projects } from "@/components/constants/data";
import ProjectsCard from "@/components/Projects/ProjectsCard";

const ProjectsPage = () => {
  return (
    <>
      <PageLayout pageTitle="Meus Projetos">{ProjectsCardsArea()}</PageLayout>
    </>
  );
};

const ProjectsCardsArea = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
      {projects.map((projeto, index) => (
        <ProjectsCard project={projeto} key={index} />
      ))}
    </div>
  );
};

export default ProjectsPage;
