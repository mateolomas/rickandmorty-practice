
import axios from 'axios';


const useFetchAllInfoById = async (id: Number) => {

    
    try {
        const urlCharacter = `https://rickandmortyapi.com/api/character/${id}`;
        const responseData1 = await axios.get(urlCharacter);

        const urlLocation = `${responseData1.data.location.url}`;
        const responseData2 = await axios.get(urlLocation);

        const urlEpisode = responseData1.data.episode[0];
        const responseData3 = await axios.get(urlEpisode);

        return {
            character: responseData1.data,
            location: responseData2.data,
            episode: responseData3.data
        }


    }
    catch (error) {
        console.log(error);
    }


}

export default useFetchAllInfoById