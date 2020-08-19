import React, { Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import NotFound from '../../System/NotFound';

const Intro = React.lazy(() => import('./Intro'));

function Body(props) {
    return (
        <Suspense fallback={<center><h1>Loading...</h1></center>}>
            <Switch>
            <Redirect exact from="/" to="/intro"></Redirect>
            <Route path="/intro" component={Intro}></Route>
            <Route path="/zone" component={null}></Route>
            <Route component={NotFound}></Route>
            </Switch>
        </Suspense>
    );
}

export default Body;