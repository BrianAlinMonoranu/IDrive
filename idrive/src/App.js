import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Image from './comps/Image';
import View from './comps/View';


function App() {

    const [selectedImg, setSelectedImg] = useState(null);

    return ( <
        div className = "App" >
        <
        Title / >
        <
        UploadForm / >
        <
        Image setSelectedImg = { setSelectedImg }
        /> {
            selectedImg && < View selectedImg = { selectedImg }
            setSelectedImg = { setSelectedImg }
            />}

            <
            /div>
        );
    }

    export default App;