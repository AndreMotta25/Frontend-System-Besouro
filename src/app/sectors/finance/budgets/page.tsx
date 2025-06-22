import React from "react";
import FinanceLayout from "../financeLayout";
import { projectsBudgets } from "@/components/constants/data";
import ProjectsCard from "@/components/Projects/ProjectsCard";

const Budgets = () => {
  return (
    <>
      <FinanceLayout>
        <BudgetsArea />
      </FinanceLayout>
    </>
  );
};

const BudgetsArea = () => {
  return (
    <div className="pb-5 flex flex-col">
      <h1 className="text-2xl text-orangeSupport font-bold">
        Orçamento por projeto
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {projectsBudgets.map((projeto, index) => (
          <ProjectsCard project={projeto} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Budgets;
