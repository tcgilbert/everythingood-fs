import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;
  console.log("middlee");

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }));

  if (req.nextUrl.pathname.startsWith("/login") && !verifiedToken) {
    console.log("hereree");
    return;
  }

  if (req.nextUrl.pathname.startsWith("/login") && verifiedToken) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  console.log("middle ran");

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/login"],
};
