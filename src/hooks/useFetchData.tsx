import { Characters, resultEpisode, AllInfo, Result } from '../interfaces/types';
import axios from "axios";
import { useState, useEffect } from "react";
import { ResultLocation } from "../interfaces/types";

function useFetchData(name: string)  {
  const [dataList, setDataList] = useState<AllInfo[]>();

  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String>("");

  const getData = async () => {
    try {
      setLoading(true);
      const url = name
        ? `https://rickandmortyapi.com/api/character/?name=${name}`
        : `https://rickandmortyapi.com/api/character/`;

      const responseData = await axios.get<Characters>(url);
      const characters: Characters = responseData.data;
      

      const LocationAux = characters.results.map(async (character) => {
        const urlLocation = character.location.url;
        const responseDataLocation = await axios.get<ResultLocation>(urlLocation);
        const location: ResultLocation = responseDataLocation.data;

        const urlEpisode = character.episode[0];
        const responseEpisode = await axios.get<resultEpisode>(urlEpisode);
        const episode: resultEpisode = responseEpisode.data;
        
        return {character, location, episode};

      })
      const data: AllInfo[] = await Promise.all(LocationAux);
      console.log(data, "data");
      setLoading(false);
      setDataList(data);
      
      

    } catch (error) {
      setError("Ha ocurrido un error");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    getData();
  }, [name]);

  return {dataList  , loading, error };
  
}

export default useFetchData;
