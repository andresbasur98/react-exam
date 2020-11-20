import React, { Component } from 'react'
import axios from 'axios'
import { Global } from '../../Global'

export default class NuevoPersonaje extends Component {

    state = {
        series: [],
        nuevoPersonaje: {}
    }



    componentDidMount = () => {

        this.cargarSeries()
    }
    
    cargarSeries = () => {
        var request = 'api/series'
        var url = Global.urlpelisculas + request

        axios.get(url).then( resp => {
            // console.log(resp.data)
            this.setState({
                series: resp.data
            })
        })

    }

    personaje = {}
    handleChange = (event) => {
        if(event.target.name === 'idSerie' || event.target.name === 'idPersonaje'){
            this.personaje[event.target.name] = parseInt(event.target.value)
            this.setState({
                personaje: this.personaje
            })
        console.log(this.personaje)

            return
        }
        this.personaje[event.target.name] = event.target.value
        this.setState({
            personaje: this.personaje
        })
        console.log(this.personaje)
    }

    crearPersonaje = (e) => {
        e.preventDefault()
        var request = 'api/Personajes'
        var url = Global.urlpelisculas + request
        
        axios.post( url, this.state.personaje).then(resp => {
            console.log(resp, 'Se ha creado el personaje')
        })
    }
    
    render() {

        return (
            <div className="container">
                <h1>Nuevo Personaje</h1>
                <form onSubmit={this.crearPersonaje}>
                    <label>Id</label>
                    <input type="number" placeholder="id" name="idPersonaje"  onChange={this.handleChange} /><br/>
                    <label>Nombre</label>
                    <input type="text" placeholder="Nombre.." name="nombre"  onChange={this.handleChange} /><br/>
                    <label>Imagen</label>
                    <input type="text" placeholder="Imagen.." name="imagen"  onChange={this.handleChange}/><br/>
                    <label>Serie</label>
                    <select name="idSerie" onChange={this.handleChange}>
                        {
                            this.state.series.length > 0 &&
                            this.state.series.map((serie) =>(
                            <option key={serie.idSerie} value={serie.idSerie}>{serie.nombre}</option>
                            ))
                        }    
                    </select><br/>
                    <button className="btn btn-success">Insertar Personaje</button>
                </form>
                
            </div>
        )
    }
}
