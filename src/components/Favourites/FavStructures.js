import React, { useContext, useEffect, useState } from 'react'
import { collection, onSnapshot, query } from "firebase/firestore";
import Structure from '../../components/Structures/Structure';
import Loader from "../../components/Loader/Loader";
import { db } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import Table from 'react-bootstrap/esm/Table';

function FavStructures() {

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [favouriteStructures, setFavouriteStructures] = useState([]);

  const getFavourite = async () => {
    const q = query(collection(db, "Favourites", `${user.email}`, "Structures"));
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
        const url = `https://cab-cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/${fav}`;

        const reponses = await fetch(url);
        const results = await reponses.json();
        return results;
      })
    );
    setFavouriteStructures(favouritesArray)
    setLoading(false);
  };

  useEffect(() => {
    getFavourite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="favouriteTitle">Favourite Structures</h1>
      {!loading ? (
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
            {favouriteStructures &&
                favouriteStructures.map((structure) => {
                    return <Structure key={structure.id} data={structure} />;
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

export default FavStructures