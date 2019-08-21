import React, {Component} from 'react'
import './CardBox.css'
import Data from './Data'
import Buttons from './Buttons'
import data from './Data';



export default class CardBox extends Component {
    constructor(){
        super();

        this.state= {
            index: 0,
        }
    }

    previous = () => {
        if(this.state.index > 0){
            this.setState({
               index: this.state.index -1
            })
        }
    }

    next = () => {
        if(this.state.index < Data.length - 1){
            this.setState({
                index: this.state.index +1
            })
        }
    }



    render(){
    
        
        
        
        return(
            <div>
                <div className="CardBox" >
                    <div>
                    <h1 className="Index">{Data[this.state.index].id}/{data.length}</h1>
                         <h1 className="Name">{Data[this.state.index].name.first}{Data[this.state.index].name.last}</h1>

                    </div>

                    <div>
                    <h2 className="Info">
                        <p>From: {Data[this.state.index].city}  {Data[this.state.index].country}</p>
                        <p>Job Title: {Data[this.state.index].title}</p>
                        <p>Employer: {Data[this.state.index].employer}</p>
                    </h2>

                    </div>
                    <h2 className="Movies">Favorite Movies:</h2>
                        <ol>
                            <li>{Data[this.state.index].favoriteMovies[0]}</li>
                            <li>{Data[this.state.index].favoriteMovies[1]}</li>
                            <li>{Data[this.state.index].favoriteMovies[2]}</li>
                        </ol>
                    

                </div>
                    <Buttons className='Buttons' previous={this.previous} next={this.next}/>
            </div>

        )
    }
}