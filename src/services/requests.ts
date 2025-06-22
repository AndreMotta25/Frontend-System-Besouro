// Função para receber o token do usuário
import Cookies from "js-cookie";

async function getToken(): Promise<string | null> {
  const token = Cookies.get("token");

  return token ? token : null;
}

export { getToken };
