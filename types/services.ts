import { LucideIcon } from "lucide-react"

export interface ServiceConfig {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  benefits: string[]
  image: string
}

export interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}