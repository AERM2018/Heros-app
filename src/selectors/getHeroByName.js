import { heroes } from "../data/Heroes"

export const getHeroByName = (name = '') =>{

    name = name.toLocaleLowerCase();
    if (name === ''){
        return []
    }

    const h = ( heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name)))
    if (h.length > 0){
        return h
    }else{
        return "Hero not found"
    }
}