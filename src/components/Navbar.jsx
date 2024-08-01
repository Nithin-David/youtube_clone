import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuBell } from "react-icons/lu";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../utils/api";
import { useDispatch } from "react-redux";
import { ADD_DATA_ITEM } from "../redux/slices/dataItemSlice";
import axios from "axios";

const Navbar = ({ setIsSidebar, isSidebar }) => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const KEY = API_KEY;

  const handleSearch = async() => {
    const input = searchRef.current.value;
    
      if(input) {
        try {
          const { data } = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=${KEY}`
          );
          dispatch(ADD_DATA_ITEM(data.items));
        } catch (err) {
          console.log(err);
          throw err;
        }
      };
  };

  return (
    <div className="flex items-center justify-between w-screen px-6 py-2 fixed top-0 bg-bgprimary border-b-[1px] border-bgsecondary z-10">
      {/* left section */}
      <div className="flex items-center justify-start gap-4 flex-1">
        <div
          onClick={() => setIsSidebar(!isSidebar)}
          className="p-3 hover:bg-bgsecondary duration-200 cursor-pointer rounded-full flex items-center justify-center">
          <GiHamburgerMenu className="text-textprimary" size={"24px"} />
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-6 w-fit text-textprimary hidden lg:block"
          />
        </Link>
      </div>

      {/* center section */}
      <div className="flex items-center justify-center gap-6 w-2/4">
        {/* search section */}
        <div className="flex items-center justify-center flex-1 bg-bgsecondary border border-bgsecondary rounded-full overflow-hidden">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            className="bg-search py-2 text-lg px-4 outline-none border-none w-full text-textprimary"
          />
          <FiSearch
          onClick={() => handleSearch()}
            size={"22px"}
            className="text-textsecondary w-16 cursor-pointer"
          />
        </div>

        {/* mic section */}
        <div className="bg-bgsecondary p-3.5 hover:bg-hover duration-200 rounded-full cursor-pointer hidden lg:block">
          <FaMicrophone className="text-textsecondary" size={"20px"} />
        </div>
      </div>

      {/* right section */}
      <div className="flex items-center justify-end gap-3 text-textsecondary flex-1 lg:gap-6">
        <div className="flex items-center justify-center p-3 duration-200 cursor-pointer rounded-full hover:bg-hover">
          <GoDeviceCameraVideo size={"24px"} />
        </div>
        <div className="flex items-center justify-center p-3 duration-200 cursor-pointer rounded-full hover:bg-hover">
          <LuBell size={"24px"} />
        </div>
        <div className="bg-red rounded-full w-10 h-10 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Navbar;
