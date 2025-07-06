import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    return NextResponse.json({
      session,
      timestamp: new Date().toISOString(),
      authOptions: {
        providers: authOptions.providers.map((p) => ({ id: p.id, name: p.name })),
        secret: !!authOptions.secret,
      },
    })
  } catch (error) {
    console.error("Debug API error:", error)
    return NextResponse.json({ error: "Failed to get session" }, { status: 500 })
  }
}
