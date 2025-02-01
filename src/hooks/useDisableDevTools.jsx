import { useEffect } from 'react';

const useDisableDevTools = () => {
  useEffect(() => {
    // Prevent right-click menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Prevent key combinations for opening DevTools
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && e.key === 'u') ||  // Ctrl+U
        (e.ctrlKey && e.key === 'i') ||  // Ctrl+I
        (e.ctrlKey && e.key === 'c') ||  // Ctrl+C
        (e.ctrlKey && e.key === 'j') ||  // Ctrl+J
        e.key === 'F12' ||              // F12
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||  // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||  // Ctrl+Shift+J
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||  // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.key === 'U')     // Ctrl+Shift+U
      ) {
        e.preventDefault();
        alert("DevTools are disabled. You cannot use developer tools on this page.");
      }
    };

    // Add event listeners to block actions
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Prevent screenshots via print screen (partially effective)
    const handlePrintScreen = (e) => {
      if (e.key === 'PrintScreen') {
        alert('Screenshots are disabled on this page.');
        document.body.style.filter = 'blur(5px)'; // Apply blur effect
        setTimeout(() => {
          document.body.style.filter = 'none'; // Revert blur after 1 second
        }, 1000);
      }
    };

    // Add Print Screen block event
    document.addEventListener('keydown', handlePrintScreen);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handlePrintScreen);
    };
  }, []);
};

export default useDisableDevTools;
