import axios from 'axios'
import React, { Children, Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Global } from '../../Global'

export default class Serie extends Component {

    state = {
        serie: {}
    }

    id = '';
    componentDidMount = async() => {
        this.id = this.props.id
        console.log(this.id)
       await this.cargarSerie()
    //    console.log(this.state.serie)
    }

    componentDidUpdate = () => {
        console.log(this.props.id)
        console.log(this.id)
        if(this.props.id !== this.id){
            this.id = this.props.id
            this.cargarSerie()
            console.log('cargando de nuevo')
            return
        }else{
            console.log('Son iguales')
        }
    }
    

    cargarSerie = async () => {
        // console.log(this.props.id)
        var request = 'api/Series/'+ this.props.id
        var url = Global.urlpelisculas + request

    await axios.get(url).then( resp => {
            // console.log(resp.data)
            this.setState({
                serie: resp.data
            })
        })
    }

    render() {
        return (
            
                
                <div>
                    { this.state.serie && (
                        <div className="card" style={{width: "18rem"}}>
                  <img src={this.state.serie.imagen} className="card-img-top" alt={this.state.serie.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{this.state.serie.nombre}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to={"/series/personajes/" + this.state.serie.idSerie} className="btn btn-primary">Personajes</NavLink>
                  </div>
                </div>
                    )}
                
            </div>
        
        )
    }
}
