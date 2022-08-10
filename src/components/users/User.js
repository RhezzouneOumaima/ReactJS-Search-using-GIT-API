import React, { Component } from 'react'
import axios from 'axios'
import SearchUsers from './SearchUsers'
import Card from './Card'
export class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    getUsers = () => {
        axios.get("https://api.github.com/users")
        .then(response => {
            this.setState({
                users:response.data
            })
        })
    }
    componentDidMount()
    {
        this.getUsers();
    }
    SearchUserFromGit = (data) =>
    {
        if(data != '')
        {
            axios.get(`https://api.github.com/search/users?q=${data}`)
            .then(response =>{
                this.setState({
                    users:response.data.items
                })
            })
        }
    }
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-md-1">
                <SearchUsers  getUserSearch={this.SearchUserFromGit}/>
            </div>
        </div>
        <div className="row">
        {this.state.users.map(user => (
            <div className="col-md-4" key={user.id}>
          <Card user={user}/>
            </div>
            
        ))}</div>
      </div>
    )
  }
}

export default User