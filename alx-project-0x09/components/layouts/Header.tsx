// components/layouts/Header.tsx
import Link from 'next/link'; // Import Link for client-side navigation

const Header: React.FC = () => {
  return (
    // Header section with dark background and white text
    <header className="bg-gray-800 text-white py-4">
      {/* Container for content, centered with auto margins, flexbox for alignment */}
      <div className="container mx-auto flex justify-between items-center px-4"> {/* Added px-4 for padding on smaller screens */}
        {/* Branding/App Title */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">ImageGen</h1> {/* Bold, larger text for the app name */}
        </div>
        {/* Navigation links */}
        <nav className="space-x-4">
          {/* Link components for smooth navigation, with hover effects */}
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header; // Export the Header component for use in other files
