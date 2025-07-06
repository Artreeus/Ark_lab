import { SimpleSignupForm } from "@/components/auth/simple-signup-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up - ArkLab AI Agent Catalog",
  description: "Create your ArkLab account to access the AI Agent Catalog",
}

export default function SignUpPage() {
  return <SimpleSignupForm />
}
