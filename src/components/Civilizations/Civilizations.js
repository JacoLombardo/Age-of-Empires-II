import React from 'react';
import { useState, useEffect } from 'react';
import Civilization from './Civilization';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import '../SearchBar/SearchBar.css';
import NavBar from '../NavBar/NavBar';
import { civilizationsdata } from '../../data/civilizationsdata';

function Civilizations() {

  const [searchInput, setSearchInput] = useState("");
  const [civilizations, setCivilizations] = useState([]);
  const [loading, setLoading] = useState(true);

  let filteredCivilizations = civilizations;
    
  if (searchInput.length > 0) {filteredCivilizations = 
    civilizations.filter((civilization) => {
      return civilization.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  useEffect(() => {
    setCivilizations(civilizationsdata.civilizations);
    setLoading(false);
  }, []);
  
    return (
      <>
        <NavBar />
        <div className="backgroundDiv">
        <br/>
          <div className="searchBar" id="search-bar-civ">
            <h1 className="discoverFont">Discover the Civilizations</h1>
            <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
        </div>
        <br/>
            {!loading ? (
              <Pagination
            data={filteredCivilizations}
            RenderComponent={Civilization}
            pageLimit={3}
            dataLimit={15}
          />
            ) : (
              <div className="loaderDiv">
                <Loader />
              </div>
          )}
          </div>
        </>
  )
}

export default Civilizations