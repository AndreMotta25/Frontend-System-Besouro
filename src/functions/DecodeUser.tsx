import { jwtDecode } from "jwt-decode";
import { IDecodedToken } from "@/interfaces/UserInterfaces";

export function DecodeUser(token: string | null): IDecodedToken | undefined {
  if (!token) {
    return undefined;
  }

  try {
    const decodedToken = jwtDecode<IDecodedToken>(token);
    return decodedToken;
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return undefined;
  }
}
