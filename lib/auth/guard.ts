import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { redirect } from "next/navigation";
import { Role } from "@/types";

export async function requireRole(allowed: Role[]) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as any)?.role as Role | undefined;
  if (!role || !allowed.includes(role)) redirect("/login");
  return session;
}
