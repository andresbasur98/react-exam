import React, { Component } from 'react'
import { Global } from '../../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

    state = {
        series: []
    }

    componentDidMount = () => {
        this.cargarSeries()
    }

    cargarSeries = () => {
        var request = 'api/series'
        var url  = Global.urlpelisculas + request

        axios.get(url).then( resp => {
            // console.log(resp.data)
            this.setState({
                series: resp.data
            })
        })
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <a className="navbar-brand" href="/">Peliculas</a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                     <li className="nav-item active">
                       <NavLink className="nav-link" to="/insertar">Nuevo Personaje <span className="sr-only">(current)</span></NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" to="/modificar">Modificar Personaje</NavLink>
                     </li>
                     <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Series
                       </a>
                       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                           {
                             this.state.series.length > 0 &&
                             this.state.series.map((serie) => (
                             <a href={'/serie/'+serie.idSerie} key={serie.idSerie} className="dropdown-item">{serie.nombre}</a>
                             ))
                           }
                        
                        
                       </div>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                     </li>
                   </ul>
                 </div>
                </nav>
            </div>
        )
    }
}
