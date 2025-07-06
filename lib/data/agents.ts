import type { Agent } from "@/lib/types"

export const agentsData: Agent[] = [
  {
    id: "agent-001",
    name: "Intelligent Chatbot Pro",
    description: "An advanced AI chatbot for enhanced customer support and query resolution.",
    status: "Active",
    category: "Customer Service",
    pricingModel: "Subscription",
  },
  {
    id: "agent-002",
    name: "Voice Assistant X",
    description: "Next-generation voice automation for internal operations and data retrieval.",
    status: "Beta",
    category: "Operations",
    pricingModel: "Per-Use",
  },
  {
    id: "agent-003",
    name: "Marketing Content Generator",
    description: "AI-powered tool to generate engaging marketing copy, ideas, and campaign outlines.",
    status: "Active",
    category: "Marketing",
    pricingModel: "Subscription",
  },
  {
    id: "agent-004",
    name: "Data Analyst Agent",
    description: "An autonomous AI agent designed to automate data analysis and report generation.",
    status: "Archived",
    category: "Data Analysis",
    pricingModel: "Free Tier",
  },
  {
    id: "agent-005",
    name: "Code Review Assistant",
    description: "AI assistant that provides instant feedback and suggestions for code quality.",
    status: "Beta",
    category: "Development",
    pricingModel: "Free Tier",
  },
  {
    id: "agent-006",
    name: "HR Onboarding Bot",
    description: "Automates the new employee onboarding process, answering FAQs and guiding through tasks.",
    status: "Active",
    category: "Human Resources",
    pricingModel: "Subscription",
  },
  {
    id: "agent-007",
    name: "Social Media Scheduler AI",
    description: "Optimizes and automates your social media content scheduling and posting.",
    status: "Active",
    category: "Marketing",
    pricingModel: "Subscription",
  },
  {
    id: "agent-008",
    name: "Financial Advisor AI",
    description: "Provides personalized financial advice and investment insights.",
    status: "Beta",
    category: "Finance",
    pricingModel: "Per-Use",
  },
  {
    id: "agent-009",
    name: "Legal Document Drafter",
    description: "Assists in drafting legal documents and contracts with AI accuracy.",
    status: "Archived",
    category: "Legal",
    pricingModel: "Per-Use",
  },
  {
    id: "agent-010",
    name: "Customer Feedback Analyzer",
    description: "Analyzes customer feedback from various channels to identify key sentiments and trends.",
    status: "Active",
    category: "Customer Service",
    pricingModel: "Subscription",
  },
]

// Simulate API call with delay
export async function fetchAgents(): Promise<Agent[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, this would be an actual API call
  // For now, we'll return our mock data
  return agentsData
}
