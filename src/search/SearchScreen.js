import React, { useMemo } from 'react';
import HeroCard from '../HeroCard';
// import {heroes} from '../data/Heroes';
import useForm from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from '../selectors/getHeroByName';
// import { getHeroById } from '../selectors/getHeroById';

const SearchScreen = ({history}) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    // const [hero, setHero] = useState([]);
    const [values,handleInputChange] = useForm({
        heroName:q
    });
    
    const {heroName} = values
    
    const herofiltered = useMemo(() => getHeroByName(q), [q]);
    
    const handleSearch = (e) =>{
        // const hero = getHeroById(name)
        e.preventDefault()
        history.push(`?q=${heroName}`)
        // setHero([hero])
    }
    
    return (
        <div className="row mt-5">
            <div className="col-5">
                <h4>Hero searcher</h4>
                <hr/>

                <form onSubmit={handleSearch}>
                   
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="heroName"
                        value={heroName}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-2 btn-block"
                        onClick={handleSearch}
                    >
                        Search...
                    </button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>
                {(q === '' && <div className="alert alert-primary"> Search a hero </div>)}
                {
                    (typeof herofiltered === "object")
                        ? ( herofiltered.map( hero => (
                            <HeroCard 
                            key={hero.id}
                              {...hero}
                            />
                        )))
                        :<div className="alert alert-danger"> {herofiltered} </div>
                }
               

                
            </div>
        </div>
    );
}

export default SearchScreen;
