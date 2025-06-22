import { api } from "@/lib/api";
import { getToken } from "@/services/requests";

async function get(endpoint: string) {
  // Função GET (Recebimento de dados)

  const token: string | null = await getToken();
  try {
    const response = await api.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error
  }
}

export { get };
