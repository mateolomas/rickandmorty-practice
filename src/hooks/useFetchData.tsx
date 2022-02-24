import { Characters, Result } from "../interfaces/types";
import axios from "axios";
import { useState, useEffect } from "react";

function useFetchData(CharacterLocationEpisode: string) {
  const [dataList, setDataList] = useState<Result[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String>("");

  const getData = async () => {
    try {
      setLoading(true);

      const url = `https://rickandmortyapi.com/api/${CharacterLocationEpisode}/`;
      const responseData = await axios.get(url);
      const dataType = await responseData.data;
      setLoading(false);
      setDataList(dataType.results);
    } catch (error) {
      setError("Ha ocurrido un error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    
  }, []);

  return { dataList, loading, error };
}

export default useFetchData;
