import axios from "axios";
import { IAnimalSmall } from "../models/IAnimalSmall";


export const getAnimals = async():Promise<IAnimalSmall[]> => {
    let response = await axios.get<IAnimalSmall[]> (
        'https://animals.azurewebsites.net/api/animals'
    );

    return response.data;
};