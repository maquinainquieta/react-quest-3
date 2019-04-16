// Lamp.js
import React, {Component} from 'react';
class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.on
    };
  }
  render() {
    const light = this.state.on ? 'on': 'off';
    //console.log('Rendering now, state is ' + this.state.on);
    return (
      <div className="Lamp">
        <button 
          onClick={() => {
            //alert(`Button clicked, current state: ${this.state.on}`);
            this.setState({ on: !this.state.on });
          }} 
          className={light}>
            {light.toUpperCase()}
          </button>
        <figure className={light} />
      </div>
    );
  }
}
export default Lamp;
/*
// QUE PASA DENTRO DE REACT?
const miLampara1 = new Lamp(); // <-- this.state = { on: false };
const miLampara2 = new Lamp(); // <-- this.state = { on: false };
miLampara1.state = { on: true } // estado de la lampara1
miLamapara2.state = { on: false} // estado indendiente de lampara2
while(true) {
  if (haCambiadoElEstado??) {
    miLampara1.render();
    miLampara2.render();
  }
}*/