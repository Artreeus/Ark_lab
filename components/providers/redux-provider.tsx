"use client"

import type React from "react"

import { Provider } from "react-redux"
import { store } from "@/lib/store/store"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
