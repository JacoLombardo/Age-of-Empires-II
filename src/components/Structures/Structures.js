import React, { useEffect, useState } from 'react'
import Structure from './Structure';
import Loader from '../Loader/Loader';
import './Structures.css';
import Table from 'react-bootstrap/esm/Table';
import Pagination2 from '../Pagination/Pagination2';
import Pagination3 from '../Pagination/Pagination3';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import '../SearchBar/SearchBar.css';

function Structures() {

  const [searchInput, setSearchInput] = useState("");
  const [structures, setStructures] = useState([]);
  const [loading, setLoading] = useState(true);

    let filteredStructures = structures
    
    if (searchInput.length > 0) {filteredStructures = 
        structures.filter((structure) => {
            return structure.name.toLowerCase().includes(searchInput.toLowerCase());
        });
    }

    const fetchStructures = () => {
        const url = `https://cab-cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structures`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                console.log(result.structures);
                setStructures(result.structures);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    useEffect(() => {
        fetchStructures();
    }, []);

  return (
    <>
      <NavBar />
        <div className="backgroundDiv">
          <br/>
          <div className="searchBar" id="search-bar-civ">
            <h1 className="discoverFont">Discover</h1>
            <h1 className="discoverFont">the Structures</h1>
            <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
          </div>
          <br/>
      {!loading ? (
        <div>
          <Table striped bordered hover style={{width: "90%", marginLeft: "auto", marginRight: "auto"}}>
          <thead>
            <tr>
              <th style={{border: "2px solid black"}}>Id</th>
              <th style={{border: "2px solid black"}}>Name</th>
              <th style={{border: "2px solid black"}}>Age</th>
              <th style={{border: "2px solid black"}}>Info</th>
            </tr>
          </thead>
          <tbody>
            <Pagination2
            data={filteredStructures}
            RenderComponent={Structure}
            pageLimit={3}
            dataLimit={20}
          />
          </tbody>
        </Table>
        <Pagination3
          data={filteredStructures}
            RenderComponent={Structure}
            pageLimit={3}
            dataLimit={20}
          />
          </div>
          ) : (
              <div className="loaderDiv">
                <Loader />
              </div>
        )}
      </div>
    </>
  )
}

export default Structures