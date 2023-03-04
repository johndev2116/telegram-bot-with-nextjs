import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "UserName", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const prisma = new PrismaClient();

        const user = await prisma.admin.findFirst({
          where: { userName: credentials?.username },
        });
        if (!user) {
          return null;
        }
        const compare = user.password == credentials?.password;
        if (!compare) {
          return null;
        }
        return { name: user.userName, email: "", image: "" } as User;
      },
    }),
  ],
};

export default NextAuth(authOptions);
