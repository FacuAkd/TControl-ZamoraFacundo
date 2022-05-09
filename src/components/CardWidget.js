import { Component } from "react";
import imagenes from "../Imagenes/images.png";

class CardWidget extends Component{
    render(){
        return(
            <img src={imagenes} width="30" height="30"></img>
        )
    }
}

export default CardWidget