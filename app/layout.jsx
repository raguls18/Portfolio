import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Ragul S | AI & Data Science Student",
  description:
    "Ragul S — Artificial Intelligence and Data Science student passionate about creating innovative AI-powered solutions and building meaningful digital experiences. Explore my portfolio of projects, skills, and achievements.",
  keywords: "Ragul S, AI, Data Science, student, portfolio, machine learning, Python, Next.js, full stack developer, Tamil Nadu",
  authors: [{ name: "Ragul S" }],
  creator: "Ragul S",
  metadataBase: new URL("https://raguls.xyz"),
  openGraph: {
    title: "Ragul S | AI & Data Science Student",
    description: "Ragul S — AI & Data Science student. Explore projects, skills, and achievements.",
    url: "https://raguls.xyz",
    siteName: "Ragul S Portfolio",
    images: [
      {
        url: "https://raguls.xyz/profile.jpg",
        width: 400,
        height: 400,
        alt: "Ragul S",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragul S | AI & Data Science Student",
    description: "Ragul S — AI & Data Science student. Explore projects, skills, and achievements.",
    images: ["https://raguls.xyz/profile.jpg"],
  },
  verification: {
    google: "r9eCsqSmVNqipo9DFoncvrY0wGev6nnqjKyXtwNN1ak",
  },
}

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ragul S",
    "url": "https://raguls.xyz",
    "image": "https://raguls.xyz/profile.jpg",
    "jobTitle": "AI & Data Science Student",
    "description": "Ragul S is an Artificial Intelligence and Data Science student passionate about building innovative AI-powered applications.",
    "sameAs": [
      "https://www.linkedin.com/in/ragul-s-37a8b9271/",
      "https://github.com/raguls18"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">{children}</body>
    </html>
  )
}
