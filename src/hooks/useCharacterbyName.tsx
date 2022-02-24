import axios from "axios";
import { useState, useEffect } from "react";

function useCharacterbyName(name: string) {

    const [characterInfo, setCharacterInfo] = useState([]);


    const getData = async () => {
        try {
            const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
            const responseData = await axios.get(url);
            const dataType = await responseData.data;
            setCharacterInfo(dataType.results);

        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [ name ]);
    return characterInfo;


}

export default useCharacterbyName;