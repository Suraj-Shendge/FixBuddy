import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const path = req.nextUrl.pathname;
      if (path.startsWith("/worker")) return token?.role === "worker";
      if (path.startsWith("/customer")) return token?.role === "customer";
      if (path.startsWith("/admin")) return token?.role === "admin";
      return true;
    }
  }
});

export const config = {
  matcher: ["/worker/:path*", "/customer/:path*", "/admin/:path*"]
};
