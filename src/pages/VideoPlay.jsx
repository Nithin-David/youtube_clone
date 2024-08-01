import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../utils/api";
import { SlDislike, SlLike } from "react-icons/sl";
import axios from "axios";
import abbreviateNumber from "../utils/viewsConverter";
import timeAgo from "../utils/timeAgo";
import { useSelector } from "react-redux";

const VideoPlay = () => {
  const { id } = useParams();
  const KEY = API_KEY;
  const listedVideoItems = useSelector((state) => state?.dataItems?.dataItems);

  const [datas, setDatas] = useState(null);
  const [commentData, setCommentData] = useState(null);

{/* for calling current video informatioin. */}
  const fetchVideoData = async () => {
    try {
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${KEY}`
      );
      setDatas(data.items[0]);
    } catch (err) {
      throw err;
    }
  };

  {/* for getting the comments of current video. */}
  const fetchCommentsData = async () => {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${datas.id}&key=${KEY}`
    );

    setCommentData(data.items);
  };


  useEffect(() => {
    fetchVideoData();

    return () => {};
  }, [id]);

   useEffect(() => {
     fetchCommentsData();

     return () => {};
   }, [datas]);



  return (
    <div className="text-textprimary pt-16 w-screen h-screen flex flex-col items-start justify-start">
      {/* for video */}
      <div className="w-full">
        <iframe
          className="min-w-full max-sm:min-w-[100%] h-[60vw] lg:h-[37vw]"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        />
      </div>

      {/* for comments and suggested videos */}
      {datas && (
        <div className="flex items-start justify-start w-full py-4 px-10">
          {/* left side */}
          <div className="flex flex-col items-start justify-start w-full lg:w-3/5 gap-8">
            {/* video title and description details. */}
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              {/* title */}
              <h1 className="text-2xl font-semibold">
                {datas?.snippet?.localized?.title}
              </h1>

              {/* related buttons */}
              <div className="flex items-center justify-between w-full">
                {/* left side */}
                <div className="flex items-center justify-start gap-8">
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-xl font-semibold">
                      {datas?.snippet?.channelTitle}
                    </h2>
                    <p className="text-sm text-texttird font-semibold">
                      {abbreviateNumber(Number(datas?.statistics?.viewCount))}{" "}
                      Subscribers
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <button className="flex items-center justify-center py-2 px-6 bg-textprimary font-semibold text-bgprimary rounded-full">
                      Join
                    </button>
                    <button className="flex items-center justify-center py-2 px-6 bg-bgsecondary font-semibold rounded-full hover:bg-hover">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* right side */}
                <div className="flex items-center justify-end gap-4">
                  <div className="flex items-center justify-center gap-4 bg-bgsecondary rounded-full overflow-hidden">
                    <button className="flex items-center justify-center gap-2 border-r-2 border-r-hover pr-4 hover:bg-hover w-full py-2 px-4">
                      <SlLike size={"20px"} />
                      {abbreviateNumber(Number(datas?.statistics?.likeCount))}
                    </button>
                    <button className="pr-4">
                      <SlDislike size={"20px"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* comments */}
            <div className="flex flex-col items-start justify-center gap-4 w-full">
              <h2 className="text-2xl font-semibold border-t border-t-bgsecondary w-full pt-2">
                {abbreviateNumber(Number(datas?.statistics?.commentCount))}{" "}
                Comments
              </h2>
              
              {/* comment section */}
              {commentData &&
                commentData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-start justify-center gap-2 w-full">
                      <div className="flex items-start justify-start gap-6">
                        {/* profile picture */}
                        <div className="min-w-12 min-h-12 rounded-full bg-hover overflow-hidden ">
                          <img
                            src={
                              item.snippet.topLevelComment.snippet
                                .authorProfileImageUrl
                            }
                            alt="profile picture"
                          />
                        </div>

                        {/* comments */}
                        <div className="flex flex-col items-start justify-start">
                          {/* username */}
                          <div className="flex items-center justify-center gap-2 text-center">
                            <p className="text-lg font-semibold">
                              {
                                item.snippet.topLevelComment.snippet
                                  .authorDisplayName
                              }
                            </p>
                            <p className="text-xs">
                              {timeAgo(
                                item.snippet.topLevelComment.snippet.updatedAt
                              )}
                            </p>
                          </div>

                          {/* comment */}
                          <p>
                            {item.snippet.topLevelComment.snippet.textDisplay}
                          </p>

                          {/* likes */}
                          <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center gap-2">
                              <SlLike />{" "}
                              {abbreviateNumber(
                                item.snippet.topLevelComment.snippet.likeCount
                              )}
                            </div>
                            <SlDislike />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/*right side list of videos */}
          <div className="w-2/5 flex flex-col items-start justify-center gap-2 pl-12 pt-4 hidden lg:block">
            {/* videos */}
           {listedVideoItems.map((list, index) => {
            return (
              <Link
                to={`/video/${list.snippet.categoryId}/${list.id}`}
                key={index}
                className="flex items-start justify-start gap-2 overflow-hidden">
                <div className="min-w-[250px] h-[150px] rounded-2xl overflow-hidden hover:rounded-md duration-200 object-fill">
                  <img
                    className="min-w-full h-full "
                    src={list.snippet.thumbnails.high.url}
                    alt="thumbnail"
                  />
                </div>
                <div className="flex flex-col items-start start py-1">
                  <h2 className="font-semibold two-line-ellipsis text-lg">
                    {list.snippet.localized.title}
                  </h2>
                  <p className="text-texttird text-sm">
                    {list.snippet.channelTitle}
                  </p>
                  <div className="text-texttird text-sm">
                    <p>
                      {abbreviateNumber(list.statistics.viewCount)} views &bull;{" "}
                      {""}
                      {timeAgo(list.snippet.publishedAt)}
                    </p>
                  </div>
                </div>
              </Link>
            );
           })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlay;
