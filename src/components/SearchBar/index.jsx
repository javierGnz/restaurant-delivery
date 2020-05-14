import React, { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import "./styles.scss";

const SearchBar = () => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch((search) => !search);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__container">
        <button className="search-bar__btn" onClick={handleSearch}>
          <MdSearch size={20} />
        </button>
        {search ? (
          <>
            <input type="text" className="search-bar__input" placeholder="Buscar productos"/>
            <button className="search-bar__btn" onClick={handleSearch}>
              <MdClose size={20} />
            </button>
          </>
        ) : (
          <div className="search-bar__categories">
            <a href="#top" className="search-bar__item">Recomendados</a>
            <a href="#top" className="search-bar__item">Fondos</a>
            <a href="#top" className="search-bar__item">Postres</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
