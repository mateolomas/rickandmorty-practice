import { Characters, Result } from '../interfaces/types';
import axios from "axios";
import { useState, useEffect } from 'react';

function useFetchData() {

    const [characterList, setCharacterList] = useState<Result[]>([]);

    const getCharacter = async () => {
        try {
          const response = await axios.get<Characters>('https://rickandmortyapi.com/api/character/');
          const {results } = await response.data;
          setCharacterList(results);
          
        }
        catch (error) {
          console.log(error);
        }
    
    
      }

      useEffect(() => {
        getCharacter();

      }, []);

      
 return {characterList};
}

export default useFetchData