import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    //this.pulsaClic=this.pulsaClic.bind(this)

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,

      submitted: false
    };
  }
/*
  pulsaClic(e){
    e.preventDefault()
    alert('se pulso click')
    return
  }*/



  onChangeTitle(e) {
   
  }

  onChangeDescription(e) {
   
  }

  saveTutorial() {
 
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  

  render() {
    
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Operacion Existosa!</h4>
            <button className="btn btn-success" onClick=''>
              Aceptar
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange=''
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripcion</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange=''
                name="description"
              />
            </div>

            <button onClick="" className="btn btn-success">
              Registrar
            </button>
          </div>
        )}
      </div>
    );
  }
}
