import { Metadata } from "next/types"

interface MetadataProps {
  title?: string
  description?: string
  image?: string
  type?: "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other"
  robots?: string
}

export function constructMetadata({
  title = "CCTV Installers Near Me - Find & Compare Top Security Camera Installers",
  description = "Find and compare the best CCTV installers in your area. Read reviews, get quotes, and hire trusted security camera installation experts.",
  image = "https://images.unsplash.com/photo-1557597774-9d475d5e8896?q=80&w=2070&auto=format&fit=crop",
  type = "website",
  robots = "index, follow",
}: MetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type, // Now constrained to specific allowed types
      siteName: "CCTV Installers Near Me",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@cctvinstallers",
    },
    robots,
    authors: [{ name: "CCTV Installers Near Me" }],
    metadataBase: new URL("https://cctvinstallersnearme.com"),
    themeColor: "#ffffff",
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  }
}
