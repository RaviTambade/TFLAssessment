import React, { createContext, useContext, useState } from 'react';

// Create Context
const NavbarContext = createContext();

// Provider Component
export const NavbarProvider = ({ children }) => {
  const [navLinks, setNavLinks] = useState([
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/newuser' },
  ]);

  // Function to update navbar links (e.g., after login)
  const updateNavLinks = (links) => setNavLinks(links);

  return (
    <NavbarContext.Provider value={{ navLinks, updateNavLinks }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Hook for consuming context
export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }

  return context;
};
