import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="card ms-3" style={{maxWidth:500}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img" src={`./assets/heroes/${id}.jpg`} alt={`${superhero}`}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{superhero}</h5>
                        </div>
                        <div className="card-subtitle tgext-muted">
                            <p>{alter_ego}</p>
                        </div>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text"> { characters } </p>
                        }
                        <p className="card-text"> <small className="text-muted"> {first_appearance} </small> </p>
                        <Link to={`/hero/${id}`}>Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;
