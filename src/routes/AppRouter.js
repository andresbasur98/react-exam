import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import ModificarPersonaje from '../components/series/ModificarPersonaje';
import NuevoPersonaje from '../components/series/NuevoPersonaje';
import Personajes from '../components/series/Personajes';
import Serie from '../components/series/Serie';

  import Navbar from '../components/UI/Navbar';

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/serie/:id" render={props => {
                        var id = props.match.params.id
                        return <Serie id={id} />
                    }} />
                    <Route exact path="/serie/personajes/:idpers" render={props => {
                        var id = props.match.params.idpers
                        return <Personajes id={id} />
                    }} />
                    <Route exact path="/insertar" component={NuevoPersonaje} />
                    <Route exact path="/modificar" component={ModificarPersonaje} />
                </Switch>
            </BrowserRouter>
        )
    }
}
