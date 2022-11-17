import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Info from '../../Images/Icons/info1.png'
import FavouriteIcon from '../../Images/Icons/favourite1.png';
import FavouritedIcon from '../../Images/Icons/favourited1.png';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../config';
import Chat from '../Chat/Chat';

function Structure({ data }) {

  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [favourites, setFavourites] = useState([]);
  const [changeImg, setChangeImg] = useState(false);

    const addFavourite = async () => {
    try {
      await setDoc(doc(db, "Favourites", `${user.email}`, "Structures", `${data.id}`), {
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
      await deleteDoc(doc(db, "Favourites", `${user.email}`, "Structures", `${data.id}`));
      console.log(data.name + " removed from favourites!")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setChangeImg(false);
  }

  const getFavourite = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Favourites", `${user.email}`, "Structures"));
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
            <td style={{border: "1px solid black", color: "#ede6c9", fontWeight: "bold", textDecoration: "underline"}} id={data.id}>{data.id}</td>
            <td style={{border: "1px solid black", fontWeight: "600"}}>{data.name}</td>
            <td style={{border: "1px solid black"}}>{data.age}</td>
        <Link onClick={handleShow}><img src={Info} alt="info" title="More info" className="infoImg"></img></Link>
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
                    <div className="inlineTags"><h3 className="classInfo">Expansion:</h3><p className="textInfo">{data.expansion}</p></div>
                    <div className="inlineTags"><h3 className="classInfo">Build Time:</h3><p className="textInfo">{data.build_time}</p></div>
                    <div className="inlineTags"><h3 className="classInfo">Hit Points:</h3><p className="textInfo">{data.hit_points}</p></div>
                    <div className="inlineTags"><h3 className="classInfo">Line of Sight:</h3><p className="textInfo">{data.line_of_sight}</p></div>
                </Modal.Body>
          {user && <hr className="hr3"></hr>}
          {user && <Chat structure={data} />}
                </div>
            </Modal>
      </>
  )
}

export default Structure