import React from 'react';
import history from './history';
import {Route, Router, Switch,} from 'react-router-dom';
import Bundle from 'components/Bundle';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export default <Router history={history}>
    <Route render={({location}) => {
        return <TransitionGroup>
            <CSSTransition key={location.pathname} classNames='slide' timeout={500}>
                <Switch location={location}>
                    <Route path={'/404'} component={() => <Bundle el={() => import('pages/NotFound')}/>}/>} />
                    <Route path={'/'} component={() => <Bundle el={() => import('pages/Home')}/>}/>} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    }}/>
</Router>
