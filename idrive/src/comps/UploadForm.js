import { FaFolderPlus } from "react-icons/fa";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import WebNavBar from "./WebNavBar";
import NewTitle from "./NewTitle";
import Image from "./Image";
import View from "./View";
import "./Home.css";

const UploadForm = (props) => {
  const { user } = props;

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [collection, setCollection] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0]; //Takes the first file given in input

    setCollection("images");

    //If a file is selected and its a png or jpg
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
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
        </label>
        <div className="output">
          {/* if the left is through it will output the right */}
          {error && <div className="error"> {error} </div>}
          {file && <div> {file.name} </div>}{" "}
          {file && (
            <ProgressBar
              collection={collection}
              file={file}
              setFile={setFile}
              setSelectedShow={setSelectedShow}
              user={user}
            />
          )}
        </div>
      </form>
      <div>
        <Image
          setSelectedImg={setSelectedImg}
          setSelectedShow={setSelectedShow}
          user={user}
        />
        {selectedImg && (
          <View selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
};

export default UploadForm;
