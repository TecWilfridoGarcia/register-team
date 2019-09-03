import React, { Component } from 'react';
import './style.css';




class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        "Tecnico",
        "Asistente",
        "Medico",
        "Preparador",
        "Etc"
    ]
    };
  }
  render() { 
    const { roles } = this.state;
    return (
        <div className="mt-3">
            <h1>Registro</h1>
          <div className="row">
            <div className="col">
            <h4>Informacion del equipo</h4>
            <form>
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label>Bandera:</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
              </div>
              <div className="form-group">
                <label>Escudo:</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
              </div>
              <div>
              <h5>Jugadores</h5>
              <ul>
              <li>Martin Arzuga, 10 , delantero</li>
              </ul>
              <h5>Cuerpo tecnico</h5>
              <ul>
              <li>Sereno Gonzalez, Colombiana , Tecnico</li>
              </ul>
            </div>
              <button type="submit" className="btn btn-success">Enviar</button>
            </form>
           
            </div>
            <div className="col">
              <form>
              <h4>Agregar jugadores</h4>
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" className="form-control" id="name" placeholder="Nombre" />
              </div>
              <div className="form-group">
                  <label>Apellidos:</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Apellidos" />
              </div>
              <div className="form-group">
                  <label>Fecha de nacimiento:</label>
                  <input type="date" className="form-control" id="birthdate" placeholder="Fecha de nacimiento" />
              </div>
              <div className="form-group">
                  <label>Posicion:</label>
                  <input type="text" className="form-control" id="position" placeholder="Posicion" />
              </div>
              <div className="form-group">
                  <label>Numero:</label>
                  <input type="text" className="form-control" id="number" placeholder="Numero" />
              </div>
              <div className="form-group">
                  <label>Es titular?</label>
                  <input type="checkbox" className="form-control" id="headline" placeholder="Titular" />
              </div>
              <button type="submit" className="btn btn-success">Agregar</button>
              </form>
              <form>
              <h4>Agregar cuerpo tecnico</h4>
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" className="form-control" id="name" placeholder="Nombre" />
              </div>
              <div className="form-group">
                  <label>Apellidos:</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Apellidos" />
              </div>
              <div className="form-group">
                  <label>Fecha de nacimiento:</label>
                  <input type="date" className="form-control" id="birthdate" placeholder="Fecha de nacimiento" />
              </div>
              <div className="form-group">
                  <label>Nacionalidad:</label>
                  <input type="text" className="form-control" id="position" placeholder="Posicion" />
              </div>
              <div className="form-group">
                  <label>Rol:</label>
                  <select >
                {roles.map(rol => <option>{rol}</option>)}
                </select> 
              </div>
              <button type="submit" className="btn btn-success">Agregar</button>
              </form>
            </div>
          </div>
           
        </div>
    );
  };

}
export default Register ;