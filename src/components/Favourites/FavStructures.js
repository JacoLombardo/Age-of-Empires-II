import React, { useContext, useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Structure from '../../components/Structures/Structure';
import Loader from "../../components/Loader/Loader";
import { db } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import Table from 'react-bootstrap/esm/Table';
import { structuresdata } from '../../data/structuresdata';

function FavStructures() {

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [favouriteStructures, setFavouriteStructures] = useState([]);

  const getFavourite = async () => {
    const q = query(collection(db, "Favourites", `${user.email}`, "Structures"), orderBy("id"));
            onSnapshot(q, (querySnapshot) => {
            const myFav = [];
            querySnapshot.forEach((doc) => {
                myFav.push(doc.data().id);
            });
              pickFavourites(myFav);
            });
  };

  const pickFavourites = (myFav) => {
    let structures = structuresdata.structures;
    let favourites = [];
    for (let i = 0; i < myFav.length; i++) {
      for (let j = 0; j < structures.length; j++) {
        if (myFav[i] === structures[j].id) {
          favourites.push(structures[j]);
        }
      }
    }
    setFavouriteStructures(favourites);
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