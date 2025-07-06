// Simple authentication without NextAuth
export interface User {
  id: string
  email: string
  name: string
  image?: string
}

export interface AuthResponse {
  success: boolean
  user?: User
  error?: string
}

// Mock user database
const mockUsers = [
  {
    id: "1",
    email: "demo@arklab.ai",
    password: "demo123",
    name: "Demo User",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    email: "admin@arklab.ai",
    password: "admin123",
    name: "Admin User",
    image: "/placeholder.svg?height=40&width=40",
  },
]

export async function authenticateUser(email: string, password: string): Promise<AuthResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user = mockUsers.find((u) => u.email === email && u.password === password)

  if (user) {
    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
      },
    }
  }

  return {
    success: false,
    error: "Invalid email or password",
  }
}

// Simple session management
export const SESSION_KEY = "arklab_session"

export function saveSession(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  }
}

export function getSession(): User | null {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem(SESSION_KEY)
    return session ? JSON.parse(session) : null
  }
  return null
}

export function clearSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(SESSION_KEY)
  }
}
