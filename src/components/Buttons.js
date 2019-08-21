import React, {Component} from 'react'


export default class Buttons extends Component {
    constructor(){
        super();


    }

    

    render(){
        return(
            <div>
                <button onClick={this.props.previous}>Previous</button>
                <button onClick={this.props.next}>Next</button>
            </div>
        )
    }
}