// Netlify Identity initialization for the main site
(function() {
  // Only run if Netlify Identity is loaded
  if (typeof window !== 'undefined' && window.netlifyIdentity) {
    
    // Initialize the widget
    window.netlifyIdentity.init();
    
    // Handle tokens in URL (recovery, invite, confirmation)
    window.netlifyIdentity.on("init", user => {
      // Check for tokens in the URL hash
      const hash = window.location.hash;
      
      if (hash && (hash.includes('recovery_token') || hash.includes('invite_token') || hash.includes('confirmation_token'))) {
        // Open the identity widget to handle the token
        window.netlifyIdentity.open();
      }
      
      // If user is already logged in and trying to access admin
      if (user && window.location.pathname === '/admin') {
        // User is authenticated, allow access to admin
        return;
      }
    });
    
    // Handle successful login
    window.netlifyIdentity.on("login", user => {
      console.log('User logged in:', user);
      // If on main site and user logs in, redirect to admin
      if (window.location.pathname !== '/admin/') {
        window.location.href = '/admin/';
      }
    });
    
    // Handle logout
    window.netlifyIdentity.on("logout", () => {
      console.log('User logged out');
      // Redirect to home page on logout
      if (window.location.pathname.includes('/admin')) {
        window.location.href = '/';
      }
    });
    
    // Handle successful password recovery/invite acceptance
    window.netlifyIdentity.on("ready", () => {
      // Additional handling if needed
      const hash = window.location.hash;
      if (hash && (hash.includes('recovery_token') || hash.includes('invite_token'))) {
        console.log('Processing token from URL');
      }
    });
    
    // Handle errors
    window.netlifyIdentity.on("error", err => {
      console.error('Netlify Identity error:', err);
    });
    
  }
})();
