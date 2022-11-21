import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Loader from '../components/Loader/Loader';
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from '../context/AuthContext';
import Chat from '../components/Chat/Chat';
import { FavouriteContext } from '../context/FavouriteContext';

function DetailedCiv() {

  const { user } = useContext(AuthContext);
  const { importAll } = useContext(FavouriteContext);
  const { id } = useParams();
  const [detailedCivilization, setDetailedCivilization] = useState([]);
  const [uniqueUnit, setUniqueUnit] = useState(null);
  const [uniqueTech, setUniqueTech] = useState(null);
  const [loading, setLoading] = useState(true);

  const images = importAll(require.context('../Images/Civilizations', false, /\.(png|jpe?g|svg)$/));
  
  const fetchCivilization = () => {
        const url = `https://cab-cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setDetailedCivilization(result);
              if (result.unique_tech.length !== 0) {
                if (result.unique_tech.length > 1) {
                  fetchUniqueTech(result.unique_tech[0]);
                }
                fetchUniqueTech(result.unique_tech);
              }
              if (result.unique_unit.length !== 0) {
                if (result.unique_unit.length > 1) {
                  fetchUniqueUnit(result.unique_unit[0]);
                }
                fetchUniqueUnit(result.unique_unit);
              }
              else {setLoading(false);}
            })
            .catch((error) => {
                console.log("error", error);
            });
  }

  const fetchUniqueUnit = (url2) => {
        const url = `https://cab-cors-anywhere.herokuapp.com/${url2}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setUniqueUnit(result);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
            });
  }

  const fetchUniqueTech = (url2) => {
        const url = `https://cab-cors-anywhere.herokuapp.com/${url2}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setUniqueTech(result);
            })
            .catch((error) => {
                console.log("error", error);
            });
  }
  
  useEffect(() => {
    fetchCivilization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar />
      <div className="backgroundDiv">
        <br /><br />

        {!loading ? (
              <div className="detailedDiv">
          <h1 className="detailedTitle">{detailedCivilization.name}</h1>
        <div className="detailedInfo">
          <div>
            <div className="detailedInfo">
              <p className="classInfo">Expansion:&nbsp;&nbsp;&nbsp; </p><p className="textInfo">{detailedCivilization.expansion}</p>
            </div>
            <div className="detailedInfo">
              <p className="classInfo">Army Type:&nbsp;&nbsp;&nbsp; </p><p className="textInfo">{detailedCivilization.army_type}</p>
            </div>
                { uniqueUnit && <div className="detailedInfo">
                  <p className="classInfo">Unique Unit:&nbsp;&nbsp;&nbsp; </p>
                  <Link to={`/units/unit-${uniqueUnit.id}`} className="textInfo">{uniqueUnit.name}</Link>
                </div>}
                {uniqueTech && <div className="detailedInfo">
                  <p className="classInfo">Unique Technology:&nbsp;&nbsp;&nbsp; </p>
                  <HashLink to={`/technologies/#${uniqueTech.id}`} className="textInfo">{uniqueTech.name}</HashLink>
                </div>}
            </div>
            <img className="detailedImgCiv" src={images[`${detailedCivilization.name}.png`]} alt={detailedCivilization.name}></img>
          </div>
          <div className="detailedInfo">
              <p className="classInfo">Team Bonus:&nbsp;&nbsp;&nbsp; </p><p className="textInfo">{detailedCivilization.team_bonus}</p>
            </div>
            <div className="detailedInfo">
                <p className="classInfo">Civilization Bonus:&nbsp;&nbsp; </p>
                <div>
                  {detailedCivilization?.civilization_bonus?.map((bonus, index) => {
                  return <ul key={index} className="textInfo">{bonus}</ul>})}
                </div>
            </div>
            
            {user ? <hr className="hr3"></hr> : null}
            { user && <Chat civilization={detailedCivilization} />}

        </div>
            ) : (
              <div className="loaderDiv">
                <Loader />
              </div>
          )}
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </>
  )
}

export default DetailedCiv