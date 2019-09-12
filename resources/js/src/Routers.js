
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Base from './components/Layout/Base';
import Basepages from './components/Layout/Basepages';
import mapPath2Components from 'RoutesMap';

import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';



const listofPages = [
    '/login',
    '/register'

];


const Routers = () => {

    if(listofPages.indexOf(location.hash) > -1) {
        return(
            <Basepages>
                <Route  path="/login" component={Login} />
                <Route path="/register" component={Register}/>
            </Basepages>
        )
    } else {

        const routesExt = Object.keys(mapPath2Components).map(
            (path, idx) => {
                return (<Route key={idx} path={`/${path}`} component={mapPath2Components[path]}/>)
            }
        );
        return(
            <Base path={location.pathname}>
                <Switch>
                    <Route exact path="/" component={mapPath2Components.dashboard}/>

                    {routesExt}
                    <Route component={mapPath2Components.error} />
                </Switch>
            </Base>
        );
    }
}
export default Routers;
