import React, { useEffect } from 'react';

const PreventInspect = () => {
  useEffect(() => {
    const preventContextMenu = (e) => {
      e.preventDefault();
    };

    const ctrlShiftKey = (e, keyCode) => {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    };

    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        ctrlShiftKey(e, 'I') || // Ctrl+Shift+I
        ctrlShiftKey(e, 'J') || // Ctrl+Shift+J
        ctrlShiftKey(e, 'C') || // Ctrl+Shift+C
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl+U
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default PreventInspect;
