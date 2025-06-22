import { api, apiTest } from "@/lib/api";
import { getToken } from "../requests";

async function post(endpoint: string, data: any) {
  // Função POST (Envio de dados para api);

  let response = null;
  const token: string | null = await getToken();

  try {
    response = await apiTest.post(endpoint, data, {
      headers: { Authorization: token ? `Bearer ${token}` : null },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export { post };
