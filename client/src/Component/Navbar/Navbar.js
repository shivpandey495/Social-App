import React, { useState } from "react";
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../ReduxContainer/userReducer";
import axios from "axios"; // edit by shiv
export default function Navbar() {
  const userDetails = useSelector((state) => state.user);
  const [searchUser, setSearchUser] = useState("");
  const [searchUserData, setSearchUserData] = useState("");
  let user = userDetails?.user;
  // console.log(user);
  let id = user?.other?._id;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  // This is edit by shiv
  const handleSearchUser = (e) => {
    setSearchUser(e.target.value);
    setTimeout(() => {
      const getPost = async () => {
        try {
          // const res = await axios.get(
          //   `http://localhost:5000/api/post/get/post/${id}`
          // );
          // console.log(res.data);
          // setSearchUserData(res.data);
          console.log("hii", searchUser);
        } catch (error) {
          console.log("error occured");
        }
      };
      getPost();
    }, 1000);
  };
  // edit end by shiv
  return (
    <div className="mainNavbar">
      <div className="LogoContainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchInputContainer">
          <img src={`${searchIcon}`} className="searchIcon" alt="" />
          <input
            type="text"
            className="searchInput"
            placeholder="search your friends"
            // value={searchUser}
            // onChange={handleSearchUser}
            name=""
            id=""
          />
          <span
            onClick={() => {
              setSearchUser("");
            }}
          >
            X
          </span>
        </div>
      </div>
      <div className="IconsContainer">
        <img src={`${Notifications}`} className="Icons" alt="" />
        <img src={`${Message}`} className="Icons" alt="" />
        <Link to={`/Profile/${id}`}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`${user?.other?.profile}`}
              className="ProfileImage"
              alt=""
            />
            <p style={{ marginLeft: "5px" }}>{user?.other?.username}</p>
          </div>
        </Link>
        <div
          style={{ marginRight: "30px", marginLeft: "20px", cursor: "pointer" }}
          onClick={handleLogout}
        >
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
