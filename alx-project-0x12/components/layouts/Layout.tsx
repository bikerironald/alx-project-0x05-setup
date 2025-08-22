// components/layouts/Layout.tsx
// Import the ReactComponentProps interface from the aliases path.
// The '@' alias is typically configured in tsconfig.json and next.config.js
import { ReactComponentProps } from "@/interfaces";
import Footer from "./Footer" // Import the Footer component
import Header from "./Header" // Import the Header component

// Layout component, which acts as a wrapper for pages to provide consistent
// header and footer across the application. It accepts 'children' as props.
const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <> {/* React Fragment to return multiple elements without adding an extra DOM node */}
      <Header /> {/* Renders the application's header */}
      {/* Main content area, ensuring it takes at least the height of the viewport minus header/footer */}
      <main className="min-h-screen">
        {children} {/* This prop will render the content of the page wrapped by this Layout */}
      </main>
      <Footer /> {/* Renders the application's footer */}
    </>
  )
}

export default Layout; // Export the Layout component for use in _app.tsx
