"use client"

import { useSession } from "next-auth/react"
import { useAppSelector } from "@/lib/store/hooks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DebugPage() {
  const { data: session, status } = useSession()
  const authState = useAppSelector((state) => state.auth)

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Debug Information</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>NextAuth Session</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded overflow-auto">
              {JSON.stringify({ status, session }, null, 2)}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Redux Auth State</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded overflow-auto">{JSON.stringify(authState, null, 2)}</pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
