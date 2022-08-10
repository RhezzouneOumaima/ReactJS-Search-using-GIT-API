import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

export class UserItem extends Component {
    state = {
        user:{}
    }
    componentWillMount()
    {
        const login = this.props.match.params.login;
        console.log(login);
         axios.get(`https://api.github.com/users/${this.login}`)
        .then(res =>{
           this.setState({
            user:res.data
           })
        })
    }
  render() {
    const { user }=this.state
    return (
      <div>
  <Card user={user}/>
      </div>
    )
  }
}

export default UserItem