import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Unit from "../../components/Units/Unit";
import Loader from "../../components/Loader/Loader";
import { db } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import { unitsdata } from '../../data/unitsdata';

function FavUnits() {

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [favouriteUnits, setFavouriteUnits] = useState([]);

  const getFavourite = async () => {
    const q = query(collection(db, "Favourites", `${user.email}`, "Units"), orderBy("id"));
            onSnapshot(q, (querySnapshot) => {
            const myFav = [];
            querySnapshot.forEach((doc) => {
                myFav.push(doc.data().id);
            });
              pickFavourites(myFav);
            });
  };

  const pickFavourites = (myFav) => {
    let units = unitsdata.units;
    let favourites = [];
    for (let i = 0; i < myFav.length; i++) {
      for (let j = 0; j < units.length; j++) {
        if (myFav[i] === units[j].id) {
          favourites.push(units[j]);
        }
      }
    }
    setFavouriteUnits(favourites);
    setLoading(false);
  };

  useEffect(() => {
    getFavourite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="favouriteTitle">Favourite Units</h1>
      {!loading ? (
              <div className='flex-container'>
              {favouriteUnits &&
                  favouriteUnits.map((unit) => {
                      return <Unit key={unit.id} data={unit} />;
                  })}
              </div>
            ) : (
              <div className="loaderDiv">
                <Loader />
              </div>
          )}  
    </>
  )
}

export default FavUnits