import React,{Component} from 'react';
import axios from 'axios'
import './users.css'


class Users extends React.Component {
    constructor() {
        super();
        this.state={
            users:[],
            name:"",
            userName:""
        };

      }
  // Get request
    componentDidMount(){
        axios.get("http://localhost:3000/posts")
        .then(response =>{
            this.setState({users:response.data})
            console.log(response.data)
        })   
    }
        // Adding a Post Request
        handleNameChange = event => {
          this.setState({ name: event.target.value });
        }
      handleUserNameChange = event => {
          this.setState({ userName: event.target.value });
        }
      addUser = event => {
          window.location.reload(true)
          event.preventDefault();
          axios.post("http://localhost:3000/posts", {
              "name": this.state.name,
              "username": this.state.userName   
          })
            .then(response =>{
              console.log(response.data)
          })
        }
    render() {
        return(
<div className="container">
    <div>
    <form className="form">
        <label> Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
        </label>
        <label> UserName:
            <input type="text" name="username"   value={this.state.userName} onChange={this.handleUserNameChange}/>
        </label>
        <button type="submit" onClick={this.addUser}>Add</button>
    </form>
    </div>
    <div>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {this.state.users.map(x=>{
              return(
           <tr key={x.id}>
           <td>{x.name}</td>
           <td>{x.username}</td>
           <td>
             <button>Edit</button>
             <button className="btnR">Delete</button>
           </td>
         </tr>)
          })}
        
        
      </tbody>
    </table>
    </div>
    
    
</div>)
      }
    }
  
  
  export default Users