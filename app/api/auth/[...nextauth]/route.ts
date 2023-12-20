import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { MongoDBAdapter } from "@auth/mongodb-adapter"


import client from "@/app/libs/client"

const authOptionsObj: AuthOptions = {
  adapter: MongoDBAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      
    })
  ],
  pages: {
    signIn: '/',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user, token }) {
        return session;
    }
},
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptionsObj)

export default authOptionsObj;

export { handler as GET, handler as POST }