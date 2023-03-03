import { useNavigate } from "react-router-dom";
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

    return (
        <>
            <div className="animal">
                <h4 className="animal__title">{props.animal.name}</h4>
                <div className="imgcontainer">
                    <img className="imgcontainer__img" src={props.animal.imageUrl} alt={props.animal.name} />
                </div>
                
                <p className="animal__foodTime">{props.animal.isFed ? <span>Mätt</span> : <span className="isHungry">Hungrig</span>}</p>
                <p className="animal__description">{props.animal.shortDescription}</p>
                <button className="animal__btn" onClick={handleClick}>Läs mer</button>
            </div>
        </>
    );

};