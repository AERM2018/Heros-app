import React, { useMemo } from 'react';
import { getHeroesByPublisher } from './selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';


const HeroList = ({publisher}) => {
    // const heroesList = getHeroesByPublisher(publisher)
    const heroesList = useMemo(() => getHeroesByPublisher(publisher), [ publisher ])
    return (
        <>
           <div className="card-columns animate__animated animate__fadeIn">
               {
                   heroesList.map( hero =>(
                       <HeroCard 
                            key={hero.id}
                            {...hero}>
                       </HeroCard>
                   ))
               }
           </div> 
        </>
    );
}

export default HeroList;
