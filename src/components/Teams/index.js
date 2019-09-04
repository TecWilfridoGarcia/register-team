import React, { Fragment } from 'react';
import axios from 'axios';

class Teams extends React.Component {
  
  state ={
    teamsArray: [],
  }
 
  componentDidMount(){
    axios.get(`http://localhost:3000/array-team`,{ headers: {'Content-Type': 'application/json'}})
    .then(res => {
      const teamsArray = res.data;
      this.setState( {teamsArray} );
      console.log(teamsArray, 'array equipo')
    });
  }
  render(){
    return (
      <Fragment>
      <div>
        Teams
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Flag</th>
      <th scope="col">Shield</th>
      <th scope="col">Button</th>
    </tr>
  </thead>
  {this.state.teamsArray.map(item =>(<tbody key={item.id}>
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.team}</td>
      <td><img width="100px" src={item.flag} /></td>
      <td><img  width="100px" src={item.shield} /></td>
      <td><button>Ir</button></td>
    </tr>
  </tbody>))}
</table>
      </div>
      </Fragment>
    )
  }
}

export default Teams;