import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Title from "./Title";
import WebNavBar from "./WebNavBar";
import NewTitle from "./NewTitle";
import Video from "./Video";
import VideoView from "./VideoView";
import { FaFolderPlus } from "react-icons/fa";

const UploadVideo = (props) => {
  const { user } = props;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [collection, setCollection] = useState("");
  const [selectedV, setSelectedV] = useState(null);

  const types = ["video/mp4"];

  const handleChange = (e) => {
    let selected = e.target.files[0]; //Takes the first file given in input

    setCollection("videos");

    //If a file is selected and its a png or jpg
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a MP4 video");
    }
  };

  return (
    <div>
      <WebNavBar />
      <NewTitle />
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <FaFolderPlus className="folder" />
        </label>{" "}
        <div className="output">
          {" "}
          {/* if the left is through it will output the right */}{" "}
          {error && <div className="error"> {error} </div>}{" "}
          {file && <div> {file.name} </div>}{" "}
          {file && (
            <ProgressBar
              collection={collection}
              file={file}
              setFile={setFile}
              user={user}
            />
          )}{" "}
        </div>{" "}
      </form>
      <div>
        <Video setSelectedV={setSelectedV} user={user} />
        {selectedV && (
          <VideoView selectedV={selectedV} setSelectedV={setSelectedV} />
        )}
      </div>
    </div>
  );
};

export default UploadVideo;
