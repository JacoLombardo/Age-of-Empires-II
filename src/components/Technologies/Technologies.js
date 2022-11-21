import React, { useEffect, useState } from 'react';
import Technology from './Technology';
import './Technologies.css';
import Loader from '../Loader/Loader';
import Table from 'react-bootstrap/Table';
import Pagination2 from '../Pagination/Pagination2';
import Pagination3 from '../Pagination/Pagination3';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import '../SearchBar/SearchBar.css';
import { technologiesdata } from '../../data/technologiesdata';

function Technologies() {

  const [searchInput, setSearchInput] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  let filteredTechnlogies = technologies;

  if (searchInput.length > 0) {filteredTechnlogies = 
    technologies.filter((technology) => {
      return technology.name.toLowerCase().includes(searchInput.toLowerCase())
        ||
        technology.description.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  useEffect(() => {
    setTechnologies(technologiesdata.technologies);
    setLoading(false);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
      <NavBar />
        <div className="backgroundDiv">
          <br/>
          <div className="searchBar" id="search-bar-civ">
            <h1 className="discoverFont">Discover the Technologies</h1>
            <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
          </div>
          <br/>
      {!loading ? (
        <div>
          <Table striped bordered hover style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <Pagination2
                data={filteredTechnlogies}
                RenderComponent={Technology}
                pageLimit={7}
                dataLimit={20}
              />
            </tbody>
          </Table>
          <Pagination3
            data={filteredTechnlogies}
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

export default Technologies