import { useState, useEffect } from "react";

const useTheme = (key: string) => {
  const [value, setValue] = useState(() => localStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(event.newValue);
      }
    };

    const handleLocalChange = () => {
      setValue(localStorage.getItem(key));
    };

    // Sobrescrever setItem para detectar mudanças locais
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (k, v) {
      originalSetItem.apply(this, [k, v]);
      if (k === key) {
        handleLocalChange();
      }
    };

    // Listener para alterações em outras abas
    window.addEventListener("storage", handleStorageChange);

    // Cleanup no unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      localStorage.setItem = originalSetItem; // Restaurar o original
    };
  }, [key]);

  return value;
};

export default useTheme;
