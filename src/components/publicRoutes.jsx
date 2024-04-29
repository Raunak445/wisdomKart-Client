import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

export default function PublicRoutes({ children }) {
  // Use the useCookies hook inside the functional component
  const [cookies] = useCookies(['token']);

  // Check if the token exists in cookies
  if (cookies.token) {
    // If token exists, navigate to the home page
    return <Navigate to="/" />;
  } else {
    // If token doesn't exist, render the children
    return children;
  }
}
