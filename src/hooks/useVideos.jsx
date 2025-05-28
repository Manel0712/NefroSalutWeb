import { useState, useEffect } from "react";
import videosService from "../services/videos/videosService.js";

export const useVideos = () => {
  const [video, setVideo] = useState([]);
  const handleVideo = (newValue) => {
    setVideo(newValue);
  };
  const getVideo = () => {
    videosService.getAll().then((data) => {
      setVideo(data);
    });
  };
  useEffect(() => {
    getVideo();
  }, []);
  return {
    video,
    handleVideo,
  };
};