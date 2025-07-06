import type { Metadata } from "next"
import { AgentCatalog } from "@/components/agent-catalog"
import { fetchAgents } from "@/lib/data/agents"

// Dynamic metadata based on the number of agents
export async function generateMetadata(): Promise<Metadata> {
  const agents = await fetchAgents()
  const agentCount = agents.length

  return {
    title: `ArkLab AI Agent Catalog - ${agentCount} AI Solutions Available`,
    description: `Browse our catalog of ${agentCount} AI agents including chatbots, voice assistants, content generators, and more. Find the perfect AI solution for your business.`,
    keywords: "AI agents, artificial intelligence, automation, chatbots, AI solutions, machine learning, ArkLab",
    openGraph: {
      title: `ArkLab AI Agent Catalog - ${agentCount} AI Solutions`,
      description: `Browse our catalog of ${agentCount} AI agents for various business needs`,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `ArkLab AI Agent Catalog - ${agentCount} AI Solutions`,
      description: `Browse our catalog of ${agentCount} AI agents for various business needs`,
    },
  }
}

export default async function HomePage() {
  // Server-side data fetching - this runs on the server
  const agents = await fetchAgents()

  return (
    <div>
      {/* The AgentCatalog component will receive the pre-fetched data */}
      <AgentCatalog initialAgents={agents} />
    </div>
  )
}
