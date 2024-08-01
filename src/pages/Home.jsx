import React from "react";
import { Sidebar, VideoCards } from "../components";


const Home = ({ isSidebar }) => {
  return (
    <div className="w-screen h-screen flex items-start justify-start">
      <Sidebar isSidebar={isSidebar}/>
      <VideoCards />
    </div>
  );
};

export default Home;
