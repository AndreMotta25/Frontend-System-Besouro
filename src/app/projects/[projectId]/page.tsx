"use client";

import { useState } from "react";
import ProjetctLayout from "./projectLayout";
import CollaboratorCard from "@/components/Collaborator/CollaboratorCard";
import MixedBarLine from "@/components/charts/MixedBarLine";
import RadialBar from "@/components/charts/RadialBar";
import CreateClassModal from "@/components/Modals/CreateClassModal";
import { Button } from "@/components/UI/button";
import { Plus } from "lucide-react";
import { projects } from "@/components/constants/data";

const ProjectsPageId = ({ params }: any) => {
  const { projectId } = params;
  const [isCreateClassModalOpen, setIsCreateClassModalOpen] = useState(false);

  const project = projects.find((p) => p.projectId === projectId);

  const handleSaveClass = (classData: {
    name: string;
    date: string;
    status: string;
    startTime: string;
    endTime: string;
    address: string;
  }) => {
    // Lógica para salvar a turma
    console.log("Nova turma criada:", classData);
    // Aqui você pode fazer uma chamada à API ou atualizar o estado
  };

  return (
    <>
      <ProjetctLayout
        pageTitle="Sobre o Projeto"
        photoProject={project?.projectLogo ? project?.projectLogo : "f"}
        colorProject={
          project?.secondAccentColor ? project?.secondAccentColor : "f"
        }
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-white">Informações do Projeto</h2>
          <Button
            onClick={() => setIsCreateClassModalOpen(true)}
            className="bg-orangeSupport hover:bg-orangeSupport/90 flex items-center gap-2"
          >
            <Plus size={16} />
            Criar Turma
          </Button>
        </div>
        {ProjectsDescription()}
      </ProjetctLayout>

      <CreateClassModal
        isOpen={isCreateClassModalOpen}
        onOpenChange={() => setIsCreateClassModalOpen(false)}
        onSave={handleSaveClass}
      />
    </>
  );
};

const ProjectsDescription = () => {
  const collaborators = [
    {
      colabName: "Colaborador",
      colabRole: "Coordenador do Projeto",
      colabPhoto:
        "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/16/1424845971-hamster-1.jpg",
    },
    {
      colabName: "Colaborador",
      colabRole: "Coordenador do Projeto",
      colabPhoto:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/12/10/1538707910-sonhar-com-raposa.jpg",
    },
    {
      colabName: "Colaborador",
      colabRole: "Coordenador do Projeto",
      colabPhoto:
        "https://midias.correiobraziliense.com.br/_midias/jpg/2023/11/14/1000x1000/1_red_panda_gf5a571841_1920-32205937.jpg?20231114133242?20231114133242",
    },
    {
      colabName: "Colaborador",
      colabRole: "Coordenador do Projeto",
      colabPhoto:
        "https://www.quadrorama.com.br/wp-content/uploads/2022/02/Gato-de-%C3%B3culos-espelhado-7589e6f4.png",
    },
    {
      colabName: "Colaborador",
      colabRole: "Coordenador do Projeto",
      colabPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB",
    },
    {
      colabName: "Colaborador",
      colabRole: "Coordenador do Projeto",
      colabPhoto: null,
    },
  ];

  return (
    <>
      <p className="dark:text-white md:pr-16 pt-4">
        Lorem ipsum dolor sit amet consectetur. Placerat amet molestie arcu
        accumsan. Tristique a ultrices at nullam aliquet. Fames at aliquet
        integer et. Faucibus aliquet massa velit ullamcorper nec metus aliquet
        pulvinar habitant. Sit id morbi sodales fringilla. Sollicitudin interdum
        sed turpis vitae gravida ipsum augue. Volutpat velit vitae dignissim
        pulvinar congue pulvinar tristique. Elementum tincidunt sem nec mus
        amet. Pellentesque eget accumsan justo id diam in et pharetra. Mauris
        varius id mauris ultrices mauris non ut arcu. Dui commodo in aliquam
        purus vivamus tempus fames. Mollis blandit in sed cursus at. Aliquam vel
        sed diam vulputate diam in vel mauris
      </p>

      <div className="w-full flex flex-col md:flex-row gap-4 md:pt-7">
        {/* Dashboards */}
        <div className="md:w-3/4 flex flex-col md:flex-row shadow-xl justify-between gap-2">
          {/* Dashboard de Inscritos/Incubados/Evasão */}
          <div className="md:w-2/5 flex items-center rounded-xl">
            <RadialBar
              labels={["Inscritos", "Incubados", "Evasão"]}
              values={[632, 333, 280]}
              subsGoalValue={800}
            />
          </div>

          {/* Dashboard de Ficha de marca */}
          <div className="md:w-3/5 flex items-center dark:text-white rounded-xl">
            <MixedBarLine />
          </div>
          
        </div>
        <div className="md:w-2/6 justify-center dark:text-white rounded-xl shadow-xl  p-3 ">
          <span>Equipe</span>
          <div className="w-full pt-2 flex flex-col md:max-h-96 overflow-auto gap-4">
            {collaborators.map((collaborator, index) => (
              <CollaboratorCard
                key={index}
                colabName={collaborator.colabName}
                colabRole={collaborator.colabRole}
                colabPhoto={collaborator.colabPhoto}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};



export default ProjectsPageId;
