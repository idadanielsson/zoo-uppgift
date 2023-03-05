import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimals} from "../../services/animalService";
import '../AnimalDetail/AnimalDetail.scss';
import { IAnimal } from "../../models/IAnimal";

export const AnimalDetail = () => {
    const {id} = useParams();
    const [animals, setAnimals] = useState<IAnimal[]>([]); 
    const [fedTime, setFedTime] = useState("");
    const [item, setItem] = useState<IAnimal | null>(null);
    const [buttondisabled, setButtondisabled] = useState(false);

    
    useEffect(() => {
      const getAnimalData = async () => {
        if (id) {
          let response = await getAnimals();

          if(response) {
            setAnimals(response as any);
          } 
        }
      };
      
      const animalsFromLs = localStorage.getItem("Animals");
      if(animalsFromLs) {
        setAnimals(JSON.parse(animalsFromLs));
      } else {
        getAnimalData();
      }
    }, []);
    
    useEffect(() => {
      const animal = animals.find((animal:IAnimal) => animal.id === Number(id)) || null;

      if(animal) {
        setFedTime(animal.lastFed);
        setItem(animal);

        const lastFedDate = new Date(animal.lastFed)
        const currentDate = new Date ();

        const timeDiffInMs = currentDate.getTime() - lastFedDate.getTime();
        const diffInSeconds = timeDiffInMs / 1000; 
        const diffInMinutes = diffInSeconds / 60;
        const diffInHours = diffInMinutes / 60;
        

        if(diffInHours > 3) {
          setButtondisabled(false);
        } else {
          setButtondisabled(true);
        }
      };
      
      
    }, [animals])

      const handleFeedClick = () => {
  
        const timeElapsed = Date.now();
        const currentDate = new Date(timeElapsed);
        const currentDateAsString = currentDate.toISOString();
        const updatedList = animals.map((animal) => {
          if (animal.id === item?.id) {
            return {
              ...animal,
              isFed: true,
              lastFed: currentDateAsString,
            };
            
          }
          return animal;
        });
      
        localStorage.setItem("Animals", JSON.stringify(updatedList));
        setAnimals(updatedList);
        setButtondisabled(true);
        setFedTime(currentDateAsString);
      };
   
        return (
            <>
                <section className="animaldetail">
                    <div className="details">
                    <div className="leftcontainer">
                    <h4 className="leftcontainer__name">{item?.name}</h4>
                        <img className="leftcontainer__img" src={item?.imageUrl} alt={item?.name} />
                        <p className="leftcontainer__feed">Matad: {fedTime}</p>
                        <button className='leftcontainer__btn' disabled={buttondisabled} onClick={() => {handleFeedClick()}}>Mata {item?.name}</button> 
                    </div>
                    <div className="rightcontainer">
                        <p className="rightcontainer__longdesc">{item?.longDescription}</p>
                        <p className="rightcontainer__medicine">Mediciner: {item?.medicine}</p>
                    </div>
                </div>
                </section>
           </>
           
        )} 
     
            
   
  
         


        
  







