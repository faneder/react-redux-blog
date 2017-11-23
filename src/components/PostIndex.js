import _ from 'lodash';
import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <div className="card col-xs-5" key={post.id}>
                    <img className="card-img-top card-img" src="http://www.zerotoalpha.com/wp-content/uploads/2016/10/shutterstock_230245711.jpg"/>
                    <div className="card-block" key={ post.id }>
                        <h4 className="card-title">{ post.title }</h4>
                        <p className="card-text">{ post.content }</p>
                        <Link to={`/posts/${post.id}`} className="btn btn-primary">
                           more
                       </Link>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary" to="/posts/create">Add</Link>
                </div>
                <div className="row">{ this.renderPosts() }</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);