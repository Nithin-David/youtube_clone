import React from 'react'
import { useSelector } from 'react-redux'
import timeAgo from '../utils/timeAgo';
import abbreviateNumber from '../utils/viewsConverter';
import { Link } from 'react-router-dom';
const VideoCards = () => {
const data = useSelector(state => state?.dataItems?.dataItems);

  return (
    <div className="scrollhover mt-16 flex items-start justify-start flex-wrap gap-4 p-4 w-full h-screen overflow-y-scroll">
      {data?.map((item, index) => (
        <Link
          to={`/video/${item?.snippet?.categoryId ? item?.snippet?.categoryId : "100"}/${item?.id ? item?.id : item?.id?.videoId}`}
          key={index}
          className="w-[450px] h-[395px] p-2 rounded-lg flex flex-col items-start justify-start gap-2">
          <div className="w-full h-[275px] object-cover">
            <img
              className="w-full h-full rounded-2xl"
              src={item?.snippet?.thumbnails?.high?.url}
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col items-start justify-start text-textprimary">
            <h2 className="font-semibold two-line-ellipsis">
              {item?.snippet?.localized?.title
                ? item?.snippet?.localized?.title
                : item?.snippet?.title}
            </h2>
            <p className="text-texttird">{item?.snippet?.channelTitle}</p>
            <div className="text-texttird">
              <p>
                {item?.statistics?.viewCount
                  ? `${abbreviateNumber(
                      item?.statistics?.viewCount
                    )} views &bull;`
                  : `${timeAgo(item?.snippet?.publishedAt)}`}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default VideoCards