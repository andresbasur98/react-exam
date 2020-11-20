import axios from 'axios'
import React, { Component } from 'react'
import { Global } from '../../Global'

export default class Personajes extends Component {

    state = {
        personajes: []
    }

    componentDidMount = () => {
        this.cargarPersonajesSerie()
        // console.log(this.props)
    }

    cargarPersonajesSerie = () => {
        var idSerie = this.props.id
        
        var request = `/api/Series/PersonajesSerie/${idSerie}`
        var url = Global.urlpelisculas + request

        axios.get(url).then( resp => {
            console.log(resp.data)
            this.setState({
                personajes: resp.data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Personaje</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.personajes.length > 0 &&
                        this.state.personajes.map((personaje) => (
                            <tr key={personaje.idPersonaje}>
                                <td>
                                    {personaje.nombre}
                                </td>
                                <td>
                                    <img src={personaje.imagen} alt={personaje.nombre} />
                                </td>
                            </tr> 
                        ))
                        
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
