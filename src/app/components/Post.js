import React, { Component } from 'react'
import { Link } from 'react-router';

export default class Post extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
        <Link to={`/posts/${this.props.id}`}>
          {this.props.postId}
        </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.userId}</p>
          <p>{this.props.id}</p>
          <p>{this.props.title}</p>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}
