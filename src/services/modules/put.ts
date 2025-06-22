import { api } from "@/lib/api";
import { getToken } from "@/services/requests";

async function put(endpoint: string, id:string, data: any) {
    // Função PUT (edição de dados)
    
    const token: string | null = await getToken();
    try {
      await api.put(endpoint + id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw new Error("Erro ao editar item!");
    }
  }

  export { put };

