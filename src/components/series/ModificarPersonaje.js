import React, { Component } from 'react'
import axios from 'axios'
import { Global } from '../../Global'

export default class ModificarPersonaje extends Component {

    state = {
        series: [],
        personajes: [],
        modificado: {}
    }

    componentDidMount = () => {
        this.cargarSeriesPersonajes()
    }

    cargarSeriesPersonajes = () => {
        var request1 = 'api/Personajes'
        var request2 = 'api/Series'

        var url = Global.urlpelisculas

        axios.get( url + request1 ).then( resp => {
            console.log('Personajes:', resp.data)
            this.setState({
                personajes: resp.data
            })
        }) 
        axios.get( url + request2 ).then( resp => {
            console.log('Series:', resp.data)
            this.setState({
                series: resp.data
            })
        }) 
    }

    modificado = {}
   
    handleChange = (event) => {
        
        this.modificado[event.target.name] = parseInt(event.target.value)
        this.setState({
            modificado: this.modificado
        })
        console.log(this.modificado)
    }

    // guardarCambios = (e) => {
    //     e.prevent.default()
    //     var request = `/api/Personajes/${this.state.modificado.idPersonaje}`
    //     console.log(request)
    // }

    modificarSeriePer = (e) => {
        e.preventDefault()
        var request = `/api/Personajes/${this.state.modificado.idPersonaje}/${this.state.modificado.idSerie}`
        var url = Global.urlpelisculas + request

        axios.put(url).then( resp => {
            console.log(resp)
            console.log('se ha modificado con éxito')
        })
    }
    

    render() {
        return (
            <div className="container">
            <h1>Personajes y series</h1>
                
                <form onSubmit={this.modificarSeriePer}>          
                    <label>Serie</label>
                    <select name="idSerie" onChange={this.handleChange}>
                        {
                            this.state.series.length > 0 &&
                            this.state.series.map((serie) =>(
                            <option key={serie.idSerie} value={serie.idSerie}>{serie.nombre}</option>
                            ))
                        }    
                    </select><br/>
                    <label>Personaje</label>
                    <select name="idPersonaje" onChange={this.handleChange}>
                        {
                            this.state.personajes.length > 0 &&
                            this.state.personajes.map((personaje) =>(
                            <option key={personaje.idPersonaje} value={personaje.idPersonaje}>{personaje.nombre}</option>
                            ))
                        }    
                    </select><br/>
                    <button className="btn btn-success">Guardar Cambios</button>
                </form>
            </div>
        )
    }
}
