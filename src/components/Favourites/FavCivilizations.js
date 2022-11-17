import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Civilization from "../../components/Civilizations/Civilization";
import Loader from "../../components/Loader/Loader";
import { db } from "../../config";
import { AuthContext } from "../../context/AuthContext";

function FavCivilizations() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [favouriteCivilizations, setFavouriteCivilizations] = useState([]);

  const getFavourite = async () => {
    const q = query(collection(db, "Favourites", `${user.email}`, "Civilizations"));
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
        const url = `https://cab-cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${fav}`;

        const reponses = await fetch(url);
        const results = await reponses.json();
        return results;
      })
    );
    setFavouriteCivilizations(favouritesArray)
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