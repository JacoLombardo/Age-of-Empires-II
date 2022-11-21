import Technology from '../../components/Technologies/Technology';
import React, { useContext, useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import { db } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import Table from 'react-bootstrap/esm/Table';
import { technologiesdata } from '../../data/technologiesdata';

function FavTechnologies() {

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [favouriteTechnologies, setFavouriteTechnologies] = useState([]);

  const getFavourite = async () => {
    const q = query(collection(db, "Favourites", `${user.email}`, "Technologies"), orderBy("id"));
            onSnapshot(q, (querySnapshot) => {
            const myFav = [];
            querySnapshot.forEach((doc) => {
                myFav.push(doc.data().id);
            });
              pickFavourites(myFav);
            });
  };

  const pickFavourites = (myFav) => {
    let technologies = technologiesdata.technologies;
    let favourites = [];
    for (let i = 0; i < myFav.length; i++) {
      for (let j = 0; j < technologies.length; j++) {
        if (myFav[i] === technologies[j].id) {
          favourites.push(technologies[j]);
        }
      }
    }
    setFavouriteTechnologies(favourites);
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