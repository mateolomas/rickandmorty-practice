import { Characters, Result} from '../interfaces/types';
import axios from "axios";
import { useState, useEffect } from 'react';

function useFetchData() {

  const [characterList, setCharacterList] = useState<Result[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String>("");

  const [LocationList, setLocationList] = useState<Result[]>([]);
  const [EpisodeList, setEpisodeList] = useState<Result[]>([]);



  const getCharacter = async () => {
    try {
      setLoading(true);

      const responseCharacter = await axios.get<Characters>('https://rickandmortyapi.com/api/character/');
      const dataCharacter = await responseCharacter.data;

      const responseLocation = await axios.get<Characters>('https://rickandmortyapi.com/api/location/');
      const dataLocation = await responseLocation.data;
      //const {results } = await responseLocation.data;

      const responseEpisode = await axios.get<Characters>('https://rickandmortyapi.com/api/episode/');
      const dataEpisode = await responseEpisode.data;

      setLoading(false);
      setCharacterList(dataCharacter.results);
      setLocationList(dataLocation.results);
      setEpisodeList(dataEpisode.results);


    }
    catch (error) {
      setError("Ha ocurrido un error")
    }
    finally {
      setLoading(false);
    }


  }

  useEffect(() => {
    getCharacter();

  }, []);


  return { characterList, LocationList, EpisodeList, loading, error };
}

export default useFetchData