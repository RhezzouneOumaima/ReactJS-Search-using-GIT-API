

import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div><div class="card">
      <img className="card-img-top" src={this.props.user.avatar_url} alt="" />
      <div className="card-body">
          <h4 className="card-title">{this.props.user.login}</h4>
          <p className="card-text">
              <a href={this.props.user.html_url} className="btn btn-sucess">Show more</a>
              <a href={this.props.user.repos_url} className="btn btn-warning">Repositories</a>
          </p>
      </div>
      </div></div>
    )
  }
}

export default Card
