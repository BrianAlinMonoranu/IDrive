import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';


function useFirestore(collection) {
    const [docs, setDocs] = useState([]);


    useEffect(() => {
        //goesinto the collection called images in this case and takes a snapshot of the current database
        const unsub = projectFirestore.collection(collection).orderBy('createdAt', 'desc').onSnapshot((snap) => {
            let documents = [];
            //will go over the documents in the database atm
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id })
            })
            setDocs(documents)
        })


        return () => unsub();
    }, [collection])
    return { docs };
}

export default useFirestore