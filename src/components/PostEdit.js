import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from "react-router-dom";

class PostShow extends Component {
	constructor(props) {
	  super(props);

	  this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return <div>loading...</div>;
		}

		return (
		<div>
		 	<div className="row">
				<div className="col-sm">
					<h3>Title: {post.title}</h3>
				</div>
			</div>
		 	<div className="row">
				<div className="col-sm">
					<h6>Categories: {post.categories}</h6>
				</div>
			</div>
		 	<div className="row">
				<div className="col-sm">
					Content: {post.content}
				</div>
			</div>
			<div className="row">
				<div className="col-sm pull-xs-right">
					<Link to="/" className="btn btn-primary btn-xs btn-action">Back To Index</Link>
					<button
					    className="btn btn-danger btn-xs btn-action pull-xs-right"
					    onClick={this.onDeleteClick}
					>
					  Delete
					</button>
				</div>
			</div>
		</div>
		)
	}
}

const mapStateToProps = ({ posts }, ownProps) => {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);