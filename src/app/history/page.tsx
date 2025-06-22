import PageLayout from "@/app/pageLayout";
import RecentCardsArea from "@/components/RecentCardsArea/RecentCardsArea";

const History = () => {
  return (
    <>
      <PageLayout pageTitle="Últimos Acessos">
        <HistoryArea />
      </PageLayout>
    </>
  );
};

const HistoryArea = () => {
  const ultimosAcessos = [
    {
      bgColor: "",
      text: "",
      path: "",
    },
  ];

  return (
    <>
      <RecentCardsArea props={ultimosAcessos} />
    </>
  );
};

export default History;
