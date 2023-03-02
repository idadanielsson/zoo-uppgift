import React, { ChangeEvent, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import { getAnimalsById } from "../../services/animalService";
import '../AnimalDetail/AnimalDetail.scss';

import { IAnimal } from "../../models/IAnimal";


export const AnimalDetail = () => {
    const {id} = useParams();
    const [animals, setAnimals] = useState<IAnimal[]>([]); 
    const [isFed, setIsFed] = useState(false);
    const [buttondisabled, setButtondisabled] = useState(false);
    const [fedTime, setFedTime] = useState("");
    const [timeToEat, setTimeToEat] = useState<Date>();
    const [error, setError] = useState("");


    
    useEffect(() => {
      const animalsFromLocalStorage = JSON.parse(localStorage.getItem("Animals") || "[]");
      setAnimals(animalsFromLocalStorage);
    }, []);
    
      const pet = animals.find((animal) => animal.id === Number(id)) || null;
  
      if (!pet) {
        return <div><p>Djuret kan ej hittas</p>
        <button className="showAnimals" >Återgå till Alla djur</button></div>;
      }
  
  
      const handleFeedClick = () => {
        const timeElapsed = Date.now();
        const rightNow = new Date(timeElapsed);
        const rightNowAsString = rightNow.toISOString();
        const updatedTime = animals.map((animal) => {
          if (animal.id === pet.id) {
            return {
              ...animal,
              isFed: true,
              lastFed: rightNowAsString,
            };
            
          }
          
          return animal;
        });
      
        localStorage.setItem("Animals", JSON.stringify(updatedTime));
        setAnimals(updatedTime);
        setButtondisabled(true);
      };
   
    console.log(isFed);

        return (
            <>
            {error !== "" ? (
                <>
                    <h2>{error}</h2>
                </>
            ): (
            
            <>
                <section className="animaldetail">
                    <div className="details">
                        
                    
                    <div className="leftcontainer">
                    <h4 className="leftcontainer__name">{pet.name}</h4>
                        <img className="leftcontainer__img" src={pet.imageUrl} alt={pet.name} />
                        <p className="leftcontainer__feed">Matad: {fedTime} {pet.lastFed}</p>
                        <button className='leftcontainer__btn' disabled={buttondisabled} onClick={handleFeedClick}>Mata {pet.name}</button>
                    </div>
                    <div className="rightcontainer">
                        <p className="rightcontainer__longdesc">{pet.longDescription}</p>
                        <p className="rightcontainer__medicine">Mediciner: {pet.medicine}</p>
                    </div>
                </div>
                </section>
           </>
           
        )} 
        </>    
        );
    }
            
   
  
         


        
  







