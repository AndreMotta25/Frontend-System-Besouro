import PageLayout from "@/app/pageLayout";

const AddClientNfs = () => {
  return (
    <>
      <PageLayout pageTitle="Cadastro Cliente">{AddClientNfsArea()}</PageLayout>
    </>
  );
};

const AddClientNfsArea = () => {
  return (
    <div className="">
      <h1 className="text-bettleOrange font-bold text-xl py-5">Dados Gerais</h1>
      <div className="dark:bg-gray-800 rounded-2xl shadow-inner drop-shadow w-1/2 border min-h-60">
        
      </div>
    </div>
  );
};

export default AddClientNfs;
