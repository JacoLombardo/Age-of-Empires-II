import Technology from '../../components/Technologies/Technology';
import React, { useContext, useEffect, useState } from 'react'
import { collection, onSnapshot, query } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import { db } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import Table from 'react-bootstrap/esm/Table';

function FavTechnologies() {

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [favouriteTechnologies, setFavouriteTechnologies] = useState([]);

  const getFavourite = async () => {
    const q = query(collection(db, "Favourites", `${user.email}`, "Technologies"));
            onSnapshot(q, (querySnapshot) => {
            const myFav = [];
            querySnapshot.forEach((doc) => {
                myFav.push(doc.data().id);
            });
              fetchFavourites(myFav);
            });
  };

  const fetchFavourites = async (myFav) => {
    const favouritesArray = await Promise.all(
      myFav.map(async (fav) => {
        const url = `https://cab-cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/technology/${fav}`;

        const reponses = await fetch(url);
        const results = await reponses.json();
        return results;
      })
    );
    setFavouriteTechnologies(favouritesArray)
    setLoading(false);
  };

  useEffect(() => {
    getFavourite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1 className="favouriteTitle">Favourite Technologies</h1>
      {!loading ? (
          <Table striped bordered hover style={{width: "90%", marginLeft: "auto", marginRight: "auto"}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {favouriteTechnologies &&
                favouriteTechnologies.map((technology) => {
                    return <Technology key={technology.id} data={technology} />;
                })}
          </tbody>
        </Table>
              
          ) : (
              <div className="loaderDiv">
                <Loader />
              </div>
          )} 
    </>
  )
}

export default FavTechnologies