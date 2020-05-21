import React, { Component } from 'react'
import {App, Controller, Dashboard} from "./Buttons.styles.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFacebookF,
  faMenorah,
  faSortUp
} from "@fortawesome/free-solid-svg-icons";


class ControlButtons extends Component { 

    constructor(){
        super()
        this.state = {
            Temperature: null,
            Height: null,
            Angle: null,
            RotationSpeed: null
        }
    }

    // const {Temperature } = this.state

    render (){
    return( 
            <App>
                <Controller>
                <section class="buttons">
                <h1>Dji Tello Controller</h1>

                     <buttons> <FontAwesomeIcon icon={faShoppingCart} />
                  UP</buttons>
                    <buttons>RIGHT</buttons>
                    <buttons>DOWN</buttons>
                    <buttons>LEFT</buttons>
                </section>
                    </Controller>
<Dashboard>
                <section class="tools">

                    <h1>Digi <br /> Dashboard</h1>
                        <h3>Temperature: <span>  84 {this.state.temperature} degrees </span></h3>
                        <h3>Height : <span> 432 {this.state.Height} Ft </span> </h3>
                        <h3>Angle: <span> 90 {this.state.Angle} </span> </h3>                        
                        <h3>Rotation Speed: <span>  783 {this.state.RotationSpeed} degrees </span> </h3>

</section>

                    </Dashboard>
            
            
            
            
            
            </App>
    )
    }
}

export default ControlButtons;
