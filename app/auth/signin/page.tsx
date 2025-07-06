import { SimpleLoginForm } from "@/components/auth/simple-login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In - ArkLab AI Agent Catalog",
  description: "Sign in to access the ArkLab AI Agent Catalog",
}

export default function SignInPage() {
  return <SimpleLoginForm />
}
