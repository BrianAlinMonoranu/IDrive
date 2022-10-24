import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import WebNavBar from "./WebNavBar";
import NewTitle from "./NewTitle";
import { FaFolderPlus } from "react-icons/fa";
import File from "./File";
import ViewPost from "./ViewPost";

const CreateFile = (props) => {
  const { user, handleLogout } = props;

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [collection, setCollection] = useState("");
  const [selectedD, setSelectedD] = useState(null);

  const documents = [];
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0]; //Takes the first file given in input

    setCollection("documents");

    //If a file is selected and its a png or jpg
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a PNG or JPEG");
    }
  };

  return (
    <div>
      <WebNavBar handleLogout={handleLogout} />
      <NewTitle />
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <FaFolderPlus className="folder" />
        </label>
        <div className="output">
          {error && <div className="error"> {error} </div>}
          {file && <div> {file.name} </div>}
          {file && (
            <ProgressBar
              collection={collection}
              file={file}
              setFile={setFile}
              user={user}
            />
          )}
        </div>
      </form>
      <div>
        <File setSelectedD={setSelectedD} documents={documents} user={user} />
        {selectedD && (
          <ViewPost selectedD={selectedD} setSelectedD={setSelectedD} />
        )}
      </div>
    </div>
  );
};

export default CreateFile;
