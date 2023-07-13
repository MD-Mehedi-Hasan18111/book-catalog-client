import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 left-0 bg-gray-800 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;