"use client"

import type React from "react"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useAppDispatch } from "@/lib/store/hooks"
import { setUser, setLoading } from "@/lib/store/slices/authSlice"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log("Auth provider - status:", status, "session:", session?.user?.email)

    if (status === "loading") {
      dispatch(setLoading(true))
    } else {
      dispatch(setLoading(false))
      if (session?.user) {
        dispatch(
          setUser({
            id: session.user.id || "",
            name: session.user.name || "",
            email: session.user.email || "",
            image: session.user.image || undefined,
          }),
        )
      } else {
        dispatch(setUser(null))
      }
    }
  }, [session, status, dispatch])

  return <>{children}</>
}
