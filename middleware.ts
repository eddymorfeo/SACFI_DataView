import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const url = new URL(req.url);
  const isAuthPage = url.pathname.startsWith("/login");

  const user = req.headers.get("cookie")?.includes("dataview_user");

  // Si NO está logeado y NO está en /login → redirigir
  if (!user && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Si está logeado y entra a /login → mandarlo al home
  if (user && isAuthPage) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|public).*)"],
};
