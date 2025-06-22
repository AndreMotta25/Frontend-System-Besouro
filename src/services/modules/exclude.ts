import { api } from "@/lib/api";
import { getToken } from "@/services/requests";

async function exclude(endpoint: string, code: any) {
  // Função DELETE (exclusão de dados)
  
  const token: string | null = await getToken();
  try {
    const response = await api.delete(endpoint + code, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao excluir item!");
  }
}

export { exclude };
