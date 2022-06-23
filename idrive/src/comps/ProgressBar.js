import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion'

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    console.log(url);
    console.log(progress)

    useEffect (() => {
        //if Url exists then we set the fil to null and therefore no more progress bar
        if(url){
            setFile(null);
        }

    }, [url, setFile])
    //If Url changes then funtion above will activate


    return ( 
    <motion.div className = 'progress-bar'
    initial = {{width: 0}}
    animate = {{width: progress + '%'}} ></motion.div>
    )
}

export default ProgressBar