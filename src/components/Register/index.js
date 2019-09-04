import React, { Component } from 'react';
import './style.css';
import axios from 'axios';


class Register extends Component {
  state = { 
      team: "",
      flag: null,
      shield: null,
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ team: event.target.value });
  }


  onChangeFlag(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      const url="http://localhost:3000/array-team";
      const formDataImages = {flag:e.target.result};  
      return formDataImages;
    }
  }
  onChangeShield(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      const url="http://localhost:3000/array-team";
      const formDataImages = {shield:e.target.result};  
      return formDataImages;
    }
  }



  handleSubmit = e => {
    if(this.state.team === "") {
      console.log('campo esta vacio');
      e.preventDefault();
      return;
    }
    const team = {
      team: this.state.team,
      flag: this.state.flag,
      shield: this.state.shield
    }
    axios.post('http://localhost:3000/array-team', team, this.onChangeFlag(e),this.onChangeShield(e) 
    ).then(
      res => {
        e.preventDefault();
        console.log(res);
        console.log(res.data);
        
      }
    )
  }
  render() { 
    return (
        <div className="mt-3">
            <h1>Registro</h1>
          <div className="row">
            <div className="col">
            <h4>Informacion del equipo</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" className="form-control"  placeholder="name@example.com" name="team" onChange={this.handleChange} />
                  <img width="350px" src={this.state.picture}/>
              </div>
              <div className="form-group">
                <label>Bandera:</label>
                <input type="file" className="form-control-file" name="flag" onChange={(e)=>{this.onChangeFlag(e)}} />
              </div>
              <div className="form-group">
                <label>Escudo:</label>
                <input type="file" className="form-control-file" name="shield" onChange={(e)=>{this.onChangeShield(e)}} />
              </div>
              <button type="submit" className="btn btn-success">Enviar</button>
            </form>
            </div>
        </div>
        </div>
    );
  };

}
export default Register;