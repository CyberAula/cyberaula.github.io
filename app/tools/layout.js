import { metadataByPage } from "@/constants/metadata";

const pageMetadata = metadataByPage.tools.es;
const canonicalUrl = "https://cyberaula.github.io/tools";
const socialImage = "https://cyberaula.github.io/assets/img/group-logo.png";

export const metadata = {
  metadataBase: new URL("https://cyberaula.github.io"),
  title: pageMetadata.title,
  description: pageMetadata.description,
  keywords: pageMetadata.keywords.split(",").map((keyword) => keyword.trim()),
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: "Cyberaula UPM",
    locale: "es_ES",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.title,
    description: pageMetadata.description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToolsLayout({ children }) {
  return children;
}
