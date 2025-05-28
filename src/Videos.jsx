import { VideosList } from "./components";
import { useVideos } from "./hooks";
import { useLocation, useNavigate } from "react-router-dom";
import videosService from "./services/videos/videosService.js";

export const Videos = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const { video, handleVideo } = useVideos();
  const handleNewVideo = () => {
    navigate("/CreateVideo");
  };
  const handleDeleteVideo = (id) => {
    videosService.videoDelete(id).then(() => {
      videosService.getAll().then((data) => {
        handleVideo(data);
      });
    });
  };
  const handleEditVideo = (id, titulo, link, categoria) => {
    navigate("/EditVideo", {
      state: {
        id,
        titulo,
        link,
        categoria,
      },
    });
  };
  return (
    <>
      <h1>VIDEOS</h1>
      <div className="flex justify-end w-full">
        <button
          style={{ marginLeft: "85.5%" }}
          onClick={handleNewVideo}
          className="ml-20, bg-slate-300 hover:bg-slate-400 transition px-6 py-4 rounded-lg shadow flex flex-col items-center"
        >
          <span className="text-xl font-semibold mb-2">create new video</span>
          <span className="text-3xl">➕🎬</span>
        </button>
      </div>
      <VideosList
        video={video}
        setVideo={handleVideo}
        handleDeleteVideo={handleDeleteVideo}
        handleEditVideo={handleEditVideo}
      />
      <button onClick={() => navigate(-1)}>Sortir</button>
    </>
  );
};
