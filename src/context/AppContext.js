import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedItemId, setSelectedItemId] = useState(null); // Теперь храним ID
    
    return (
        <AppContext.Provider value={{ 
            selectedItemId, 
            setSelectedItemId 
        }}>
            {children}
        </AppContext.Provider>
    );
};