"use client"

import type React from "react"

import { useEffect } from "react"
import { useAppDispatch } from "@/lib/store/hooks"
import { setUser, setLoading } from "@/lib/store/slices/authSlice"
import { getSession } from "@/lib/auth-simple"

export function SimpleAuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Check for existing session on mount
    dispatch(setLoading(true))

    const session = getSession()
    if (session) {
      dispatch(setUser(session))
    } else {
      dispatch(setUser(null))
    }

    dispatch(setLoading(false))
  }, [dispatch])

  return <>{children}</>
}
