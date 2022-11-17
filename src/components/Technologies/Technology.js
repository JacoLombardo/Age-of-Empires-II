import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Info from "../../Images/Icons/info1.png";
import FavouriteIcon from "../../Images/Icons/favourite1.png";
import FavouritedIcon from "../../Images/Icons/favourited1.png";
import { HashLink } from "react-router-hash-link";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../config";
import Chat from "../Chat/Chat";

function Technology({ data }) {

  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    fetchDevelopsIn(data.develops_in);
  };
  const [developsIn, setDevelopsIn] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [changeImg, setChangeImg] = useState(false);

  const fetchDevelopsIn = (url2) => {
    const url = `https://cab-cors-anywhere.herokuapp.com/${url2}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (result.length > 1) {
          setDevelopsIn(result[0]);
        } else {
          setDevelopsIn(result);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const addFavourite = async () => {
    try {
      await setDoc(doc(db, "Favourites", `${user.email}`, "Technologies", `${data.id}`), {
        name: data.name,
        id: data.id,
      });
      console.log(data.name + " added to favourites!")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setChangeImg(true);
  };

  const removeFavourite = async () => {
    try {
      await deleteDoc(doc(db, "Favourites", `${user.email}`, "Technologies", `${data.id}`));
      console.log(data.name + " removed from favourites!")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setChangeImg(false);
  };

  const getFavourite = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "Favourites", `${user.email}`, "Technologies")
      );
      const myFav = [];
      querySnapshot.forEach((doc) => {
        myFav.push(doc.data().id);
      });
      setFavourites(myFav);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (user) {
      getFavourite();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <tr key={data.id}>
        <td
          style={{
            border: "1px solid black",
            color: "#ede6c9",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          id={data.id}
        >
          {data.id}
        </td>
        <td style={{ border: "1px solid black", fontWeight: "600" }}>
          {data.name}
        </td>
        <td style={{ border: "1px solid black" }}>{data.description}</td>
        <Link onClick={handleShow}>
          <img
            src={Info}
            alt="info"
            title="More info"
            className="infoImg"
          ></img>
        </Link>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <div className="modalBackground">
          <Modal.Header closeButton className="modalHeader">
            <Modal.Title>{data.name}</Modal.Title>
            {user &&
              (favourites.length !== 0 ?
                favourites.map(() => {
                  return (
                    favourites.includes(data.id) ?
                      <Link onClick={removeFavourite}><img
                        src={FavouritedIcon}
                        alt="favourited"
                        title="In your favourites"
                        className="favouriteIconTech">
                      </img></Link>
                      :
                      (
                        !changeImg ?
                          <Link onClick={addFavourite}>
                            <img
                              src={FavouriteIcon}
                              alt="favourite"
                              title="Add to favourites!"
                              className="favouriteIconTech">
                            </img></Link>
                          :
                          <Link onClick={removeFavourite}><img
                            src={FavouritedIcon}
                            alt="favourited"
                            title="In your favourites"
                            className="favouriteIconTech">
                          </img></Link>))
                }) : <Link onClick={addFavourite}>
                            <img
                              src={FavouriteIcon}
                              alt="favourite"
                              title="Add to favourites!"
                              className="favouriteIconTech">
                            </img></Link>)}
          </Modal.Header>
          <Modal.Body>
            <div className="inlineTags">
              <h3 className="classInfo">Age:</h3>
              <p className="textInfo">{data.age}</p>
            </div>
            <div className="inlineTags">
              <h3 className="classInfo">Expansion:</h3>
              <p className="textInfo">{data.expansion}</p>
            </div>
            <div className="inlineTags">
              <h3 className="classInfo">Build Time:</h3>
              <p className="textInfo">{data.build_time}</p>
            </div>
            <div className="inlineTags">
              <h3 className="classInfo">Develops In:</h3>
              <HashLink
                to={`/structures/#${developsIn.id}`}
                className="textInfo"
              >
                {developsIn.name}
              </HashLink>
            </div>
          </Modal.Body>
          {user && <hr className="hr3"></hr>}
          {user && <Chat technology={data} />}
        </div>
      </Modal>
    </>
  );
}

export default Technology;
