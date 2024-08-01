import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { GoHistory } from "react-icons/go";
import { MdPlaylistAdd } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { GrYoutube } from "react-icons/gr";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { useDispatch} from "react-redux";
import { ADD_CATEGORY_ID } from "../redux/slices/categorySlice";

const Sidebar = ({ isSidebar }) => {
  const dispatch = useDispatch();

  const firstSection = [
    {
      id: 1,
      icon: <AiFillHome />,
      title: "Home",
      catId: 0,
    },
    {
      id: 2,
      icon: <SiYoutubeshorts />,
      title: "Shorts",
      catId: null,
    },
    {
      id: 3,
      icon: <MdOutlineSubscriptions />,
      title: "Subscriptions",
      catId: null,
    },
  ];

  const secondSection = [
    {
      id: 4,
      icon: <BsPersonWorkspace />,
      title: "Your channel",
      catId: null,
    },
    {
      id: 5,
      icon: <GoHistory />,
      title: "History",
      catId: null,
    },
    {
      id: 6,
      icon: <MdPlaylistAdd />,
      title: "Playlists",
      catId: null,
    },
    {
      id: 7,
      icon: <GoVideo />,
      title: "Your videos",
      catId: null,
    },
    {
      id: 8,
      icon: <MdOutlineWatchLater />,
      title: "Watch later",
      catId: null,
    },
    {
      id: 9,
      icon: <BiSolidLike />,
      title: "Liked videos",
      catId: null,
    },
  ];

  const thirdSection = [
    {
      id: 10,
      icon: <BsFire />,
      title: "Trending",
      catId: null,
    },
    {
      id: 11,
      icon: <GiShoppingBag />,
      title: "Shopping",
      catId: null,
    },
    {
      id: 12,
      icon: <IoMusicalNoteOutline />,
      title: "Music",
      catId: 10,
    },
    {
      id: 13,
      icon: <BiMoviePlay />,
      title: "Movies",
      catId: null,
    },
    {
      id: 14,
      icon: <HiMiniSignal />,
      title: "Live",
      catId: null,
    },
    {
      id: 15,
      icon: <SiYoutubegaming />,
      title: "Gaming",
      catId: 20,
    },
    {
      id: 16,
      icon: <FaRegNewspaper />,
      title: "News",
      catId: 25,
    },
    {
      id: 17,
      icon: <IoTrophyOutline />,
      title: "Sports",
      catId: 17,
    },
    {
      id: 18,
      icon: <MdOutlineLightbulb />,
      title: "Courses",
      catId: null,
    },
    {
      id: 19,
      icon: <GiClothes />,
      title: "Fashion & Beauty",
      catId: null,
    },
    {
      id: 20,
      icon: <MdPodcasts />,
      title: "Podcasts",
      catId: null,
    },
  ];

  const fourthSection = [
    {
      id: 21,
      icon: <GrYoutube />,
      title: "YouTube Premium",
      catId: null,
    },
    {
      id: 22,
      icon: <SiYoutubestudio />,
      title: "YouTube Studio",
      catId: null,
    },
    {
      id: 23,
      icon: <SiYoutubemusic />,
      title: "YouTube Music",
      catId: null,
    },
    {
      id: 24,
      icon: <TbBrandYoutubeKids />,
      title: "YouTube Kids",
      catId: null,
    },
  ];

  const addToCategory = (catId) => {
    dispatch(ADD_CATEGORY_ID(catId));
  };

  return (
    <div
      className={`scrollhover flex flex-col items-start justify-start overflow-y-scroll h-full ${
        isSidebar ? "w-0" : "w-[16%]"
      } mt-16 text-textsecondary px-4 py-2 duration-100 transition-all ease-in-out`}>
      {/* first */}
      <div className="flex flex-col items-start justify-center w-full border-b border-bgsecondary py-2">
        {firstSection.map((item) => (
          <div
            onClick={() => {
              addToCategory(item.catId);
            }}
            key={item.id}
            className="px-4 py-3 rounded-lg hover:bg-bgsecondary w-full flex items-center justify-start gap-6 cursor-pointer">
            <div className="text-[24px]">{item.icon}</div>
            <p className="hidden lg:block">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="cursor-pointer text-xl font-bold px-4 py-2 rounded-lg hover:bg-bgsecondary w-full flex items-center justify-start gap-4 mt-2">
        <p>You</p>
        <FaAngleRight />
      </div>

      {/* second */}
      <div className="flex flex-col items-start justify-center w-full border-b border-bgsecondary py-2">
        {secondSection.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer px-4 py-3 rounded-lg hover:bg-bgsecondary w-full flex items-center justify-start gap-6">
            <div className="text-[24px]">{item.icon}</div>
            <p className="hidden lg:block">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold px-4 py-2 rounded-lg hover:bg-bgsecondary w-full flex items-center justify-start gap-4 mt-2">
        <p>Explore</p>
      </div>

      {/* third */}
      <div className="flex flex-col items-start justify-center w-full border-b border-bgsecondary py-2">
        {thirdSection.map((item) => (
          <div
            onClick={() => {
              addToCategory(item.catId);
            }}
            key={item.id}
            className="cursor-pointer px-4 py-3 rounded-lg hover:bg-bgsecondary w-full flex items-center justify-start gap-6">
            <div className="text-[24px]">{item.icon}</div>
            <p className="hidden lg:block">{item.title}</p>
          </div>
        ))}
      </div>
      <div className=" text-xl font-bold px-4 py-2 rounded-lg hover:bg-bgsecondary w-full flex items-center justify-start gap-4 mt-2">
        <p>More from Youtube</p>
      </div>

      {/* fourth */}
      <div className="flex flex-col items-start justify-center w-full border-b border-bgsecondary py-2">
        {fourthSection.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer px-4 py-3 rounded-lg hover:bg-bgsecondary w-full flex items-center justify-start gap-6">
            <div className="text-[24px] text-red drop-shadow-md">
              {item.icon}
            </div>
            <p className="hidden lg:block">{item.title}</p>
          </div>
        ))}
      </div>

      {/* copy right section */}
      <div className="py-2 flex flex-col items-start justify-center gap-4 text-sm">
        <p>
          About Press Copyright <br /> Contact us Creators <br /> Advertise
          Developers
        </p>
        <p>
          Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new
          features
        </p>
        <p className="text-xs text-hover">© 2024 Google LLC</p>
      </div>
    </div>
  );
};

export default Sidebar;
