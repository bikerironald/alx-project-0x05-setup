// pages/_app.tsx
import Layout from "@/components/layouts/Layout"; // Import the Layout component
import "@/styles/globals.css"; // Import global CSS for Tailwind and other base styles
import type { AppProps } from "next/app"; // Import AppProps type from Next.js

// The default App component. This component wraps all your pages.
// It's used to initialize pages, maintain state, and inject global styles/layouts.
export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the Component (current page) with the Layout component.
    // This ensures that all pages will have the Header and Footer.
    <Layout>
      {/* Component represents the active page (e.g., index.tsx).
          pageProps are the initial props preloaded for that page. */}
      <Component {...pageProps} />
    </Layout>
  )
}
