import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalSmall } from "../../models/IAnimalSmall";
import '../Animal/Animal.scss';

interface IAnimalProps {
    animal: IAnimalSmall;
}

export const Animal = (props: IAnimalProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/animal/${props.animal.id}`);
    };

    
    const updateIsFed = () => {
        const animals = localStorage.getItem("Animals");
        if(animals){
            const array = JSON.parse(animals);
            const animal = array.find((animal:IAnimal) => animal.id === Number(props.animal.id)) || null;
            if(animals){
                const lastFed = new Date(animal.lastFed);
                const rightNow = new Date();

                const timeDiffInMs = rightNow.getTime() - lastFed.getTime();
                const diffInSeconds = timeDiffInMs / 1000; 
                const diffInMinutes = diffInSeconds / 60;
                const diffInHours = diffInMinutes / 60;

                if(diffInHours > 3){
                    return false;
                }else{
                    return true;
                }
            }
        } 
    }
    

    return (
        <>
            <div className="animal">
                <h4 className="animal__title">{props.animal.name}</h4>
                <div className="imgcontainer">
                    <img className="imgcontainer__img" src={props.animal.imageUrl} alt={props.animal.name} />
                </div>
                
                <p className="animal__foodTime">{updateIsFed() ? <span>{props.animal.name} är mätt</span> : <span className="isHungry">{props.animal.name} är hungrig</span>}</p>
                <p className="animal__description">{props.animal.shortDescription}</p>
                <button className="animal__btn" onClick={handleClick}>Läs mer</button>
            </div>
        </>
    );
};