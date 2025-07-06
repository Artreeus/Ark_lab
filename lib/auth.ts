import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Mock user database - in production, this would be a real database
const mockUsers = [
  {
    id: "1",
    email: "demo@arklab.ai",
    password: "demo123",
    name: "Demo User",
    image: null,
  },
  {
    id: "2",
    email: "admin@arklab.ai",
    password: "admin123",
    name: "Admin User",
    image: null,
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("Authorize called with:", credentials?.email)

          if (!credentials?.email || !credentials?.password) {
            console.log("Missing credentials")
            return null
          }

          // Find user in mock database
          const user = mockUsers.find(
            (user) => user.email === credentials.email && user.password === credentials.password,
          )

          if (user) {
            console.log("User found:", user.email)
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
            }
          }

          console.log("User not found")
          return null
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback - token:", token.sub, "user:", user?.id)
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.image = user.image
      }
      return token
    },
    async session({ session, token }) {
      console.log("Session callback - token:", token.sub)
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
        session.user.image = token.image as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback - url:", url, "baseUrl:", baseUrl)
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Enable debug mode
}
