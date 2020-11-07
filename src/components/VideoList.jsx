import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} />
  ));
  return <h1>{listOfVideos}</h1>;
};

export default VideoList;
