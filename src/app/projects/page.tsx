"use client";

import PageLayout from "@/app/pageLayout";
import { projects } from "@/components/constants/data";
import ProjectsCard from "@/components/Projects/ProjectsCard";
import CreateProjectModal from "@/components/Modals/CreateProjectModal";
import { useState } from "react";
import { Button } from "@/components/UI/button";
import { Plus } from "lucide-react";

const ProjectsPage = () => {
  return (
    <>
      <PageLayout pageTitle="Meus Projetos">{ProjectsCardsArea()}</PageLayout>
    </>
  );
};

const ProjectsCardsArea = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleCreateProject = (name: string, description: string) => {
    // Aqui você pode implementar a lógica para salvar o projeto
    console.log("Novo projeto:", { name, description });
    // Por exemplo, fazer uma chamada à API ou adicionar ao estado
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div></div>
        <Button
          onClick={handleOpenCreateModal}
          className="bg-orangeSupport hover:bg-orangeSupport/90 text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Novo Projeto
        </Button>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {projects.map((projeto, index) => (
          <ProjectsCard project={projeto} key={index} />
        ))}
      </div>

      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onOpenChange={handleCloseCreateModal}
        onSave={handleCreateProject}
      />
    </div>
  );
};

export default ProjectsPage;
