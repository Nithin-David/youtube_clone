import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar } from './components';
import { API_KEY } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ADD_DATA_ITEM } from './redux/slices/dataItemSlice';
import VideoPlay from './pages/VideoPlay';

const App = () => {
  const dispatch = useDispatch();
  const [isSidebar, setIsSidebar] = useState(false);

  const categoryId = useSelector((state) => state.categoryId.categoryId);

  const api_key = API_KEY;
  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${api_key}`;

  const fetchData = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      dispatch(ADD_DATA_ITEM(data.items));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
    // Clean up the request
    return () => {};
  }, [categoryId]);

  return (
    <>
      <Navbar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
      <Routes>
        <Route path="/" element={<Home isSidebar={isSidebar} />} />
        <Route path="/video/:catId/:id" element={<VideoPlay />} />
      </Routes>
    </>
  );
}

export default App