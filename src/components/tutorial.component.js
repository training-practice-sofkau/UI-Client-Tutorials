import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
  

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    
  }

  onChangeTitle(e) {
    
  }

  onChangeDescription(e) {
   
  }

  getTutorial(id) {
    
  }

  updatePublished(status) {
   
  }

  updateTutorial() {
    
  }

  deleteTutorial() {    
   
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange=''
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descripcion</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange=''
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Estado:</strong>
                </label>
                {currentTutorial.published ? "Publicado" : "Pendiente"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick=''
              >
                No-Publicado
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick=''
              >
                Publicado
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick=''
            >
              Borrar
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick=''
            >
              Actualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Porfavor presione CLICK en Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
