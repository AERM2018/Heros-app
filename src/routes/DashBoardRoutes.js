import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MarvelScreen from '../marvel/MarvelScreen';
import DcScreen from '../dc/DcScreen';
import HeroScreen from '../heroes/HeroScreen';
import { Navbar } from '../ui/NavBar';
import SearchScreen from '../search/SearchScreen';

const DashBoardRoutes = () => {
    return (
        <>
        <Navbar/>
            <div className='container mt-2'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}/>
                    <Route exact path='/dc' component={DcScreen}/>
                    <Route exact path='/hero/:heroeId' component={HeroScreen}/>
                    <Route exact path='/search' component={SearchScreen}/>

                    <Redirect to='/marvel' />

                </Switch>
            </div>
        </>
    );
}

export default DashBoardRoutes;
