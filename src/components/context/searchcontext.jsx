import { createContext, useState } from "react";

export const MyContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchsong, setSearchsong] = useState("");
  const [foryou, setForYou] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSong, setSelectedSong] = useState({});

  return (
    <MyContext.Provider
      value={{
        searchsong,
        setSearchsong,
        foryou,
        setForYou,
        selectedColor,
        setSelectedColor,
        selectedSong,
        setSelectedSong,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default SearchProvider;
