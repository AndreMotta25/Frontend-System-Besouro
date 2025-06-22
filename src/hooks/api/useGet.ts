import { get } from "@/services/modules/get";

const useGet = () => {
  // Hook para atualização de dados

  let response = null;
  let statusCode = null;

  const getData = async (endpoint: string) => {
    // Simulação de 1,5s de carregamento
    await new Promise((resolve) => setTimeout(resolve, 1450));
    try {
      const result: any = await get(endpoint);

      response = result ? result.data : null;
      statusCode = result ? result.status : null;
      return { response, statusCode };
    } catch (error) {
      console.log(error);
    }
  };
  return { getData };
};

export default useGet;
