import { createContext, useState } from "react";

export const MyContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchsong, setSearchsong] = useState(null);
  const [foryou, setForYou] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <MyContext.Provider
      value={{
        searchsong,
        setSearchsong,
        foryou,
        setForYou,
        selectedColor,
        setSelectedColor,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default SearchProvider;
