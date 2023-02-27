import React, { useEffect, useState } from "react"
import { IAnimalSmall } from "../../models/IAnimalSmall";
import '../Animals/Animals.scss';

export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimalSmall[]>([]);

    useEffect(() => {
        const getData = async() => {
            let animals = await getAnimals();
            setAnimals(animals);

            getData();
        }
    })

    return (
        <>
            <div className="animals">
                <h4 className="animals__title">{}</h4>
            </div>
        </>
    )

}