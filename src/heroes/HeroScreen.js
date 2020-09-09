import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';

const HeroScreen = ({history}) => {
    const {heroeId} = useParams()
    // const heroe = getHeroById(heroeId)
    const heroe = useMemo(() => getHeroById(heroeId),[heroeId])

    if (!heroe){
        return <Redirect to="/"/>
    }
    const handleReturn = () =>{
        if(history.length >= 2){
            history.goBack()
        }else{
            (publisher === "DC Comics")
            ? history.replace("/dc")
            : history.replace("/marvel")
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }= heroe
    console.log(
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters)
    return (
        <div>
            <div className="row mt-5">
                <div className="col-4">
                    <img className="img-thumbnail animate__animated animate__fadeInUp" style={{maxWidth:230}} src={`../assets/heroes/${heroeId}.jpg`} alt={alter_ego}/>
                </div>
                <div className="col-8 container animate__animated animate__slideInRight">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item"><b>Nombre: </b>{alter_ego}</li>
                        <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                        <li className="list-group-item"><b>First appearance </b>{first_appearance}</li>
                    </ul>
                    <h5> Characters </h5>
                    <p> { characters } </p>

                    <button 
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                        >
                        Return
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroScreen;
