import React from "react";
import { VideoUpdateForm } from "./components";
import { useLocation } from "react-router-dom";

export const VideoUpdate = () => {
  const { state: data } = useLocation();
  return (
    <div>
      <h1>Editar video</h1>
      <VideoUpdateForm
        id={data.id}
        videoTitle={data.titulo}
        videoLink={data.link}
        videoCategory={data.categoria}
      />
    </div>
  );
};
