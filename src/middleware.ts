import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login", "/forget-password","/register"];
const isPublicRoute = (pathname: string) => {
  return publicRoutes.some((publicPath: string) =>
    pathname.startsWith(publicPath)
  );
};

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;

  // Caso o usuário tenha token e tente acessar "/login", redireciona para a página inicial
  if (token) {
    if (isPublicRoute(pathname)) {
      return NextResponse.redirect(new URL("/", request.url)); // ou para outra página, se preferir
    }
    return NextResponse.next();
  }

  // Caso o usuário não tenha token e tente acessar qualquer página que não seja "/login", redireciona para "/login"
  if (!token && !isPublicRoute(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/register",
    "/history",
    "/projects/:path*",
    "/sectors/:path*",
    "/",
    "/login",
    "/forget-password",
    "/forget-password/:path",
  ],
};
