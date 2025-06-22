import PageLayout from "@/app/pageLayout";
import Link from "next/link";

const Data = () => {
  return (
    <>
      <PageLayout pageTitle="Controle de Dados">
        <DataArea/>
      </PageLayout>
    </>
  );
};

const DataArea = () => {

    return (
        <div className="">
            <Link href='/sectors/data/approvalUsers'>Clique Aqui</Link>
        </div>
    )
}

export default Data;