// components/layouts/Footer.tsx
import Link from "next/link"; // Import Link for navigation within the app

const Footer: React.FC = () => {
  return (
    // Footer section with dark background, white text, and padding
    <footer className="bg-gray-800 text-white py-6">
      {/* Container for content, centered with auto margins, text aligned to center */}
      <div className="container mx-auto text-center px-4"> {/* Added px-4 for padding on smaller screens */}
        {/* Main title for the footer */}
        <h1 className="text-lg font-semibold">Image Generation App</h1>
        {/* Copyright notice with dynamic year */}
        <p className="mt-2 text-sm">© {new Date().getFullYear()}. All rights reserved.</p>
        {/* Navigation links within the footer */}
        <div className="mt-4">
          {/* Link components with subtle styling and hover effects */}
          <Link href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</Link>
          <Link href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</Link>
          <Link href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
