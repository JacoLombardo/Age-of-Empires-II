import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Civilization from "../../components/Civilizations/Civilization";
import Loader from "../../components/Loader/Loader";
import { db } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import { civilizationsdata } from '../../data/civilizationsdata';

function FavCivilizations() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [favouriteCivilizations, setFavouriteCivilizations] = useState([]);

  const getFavourite = async () => {
    const q = query(collection(db, "Favourites", `${user.email}`, "Civilizations"), orderBy("id"));
            onSnapshot(q, (querySnapshot) => {
            const myFav = [];
            querySnapshot.forEach((doc) => {
                myFav.push(doc.data().id);
            });
              pickFavourites(myFav);
            });
  };

  const pickFavourites = (myFav) => {
    let civilizations = civilizationsdata.civilizations;
    let favourites = [];
    for (let i = 0; i < myFav.length; i++) {
      for (let j = 0; j < civilizations.length; j++) {
        if (myFav[i] === civilizations[j].id) {
          favourites.push(civilizations[j]);
        }
      }
    }
    setFavouriteCivilizations(favourites);
    setLoading(false);
  };

  useEffect(() => {
    getFavourite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="favouriteTitle">Favourite Civilizations</h1>
      {!loading ? (
        <div className="flex-container">
          {favouriteCivilizations &&
            favouriteCivilizations.map((civilization) => {
              return (
                <Civilization
                  key={civilization.id}
                  data={civilization}
                />
              );
            })}
        </div>
      ) : (
        <div className="loaderDiv">
          <Loader />
        </div>
      )}
    </>
  );
}

export default FavCivilizations;