import _ from 'lodash';
import React, { Component } from 'react';
import { fetchUsers } from '../actions';
import { connect } from 'react-redux'

const UserList = ({ users }) => (
    <div className="row">
    {
        users.map((user) => (
            <div className="col-xs-12 col-md-4 pb-3 pr-3" key={user.id}>
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">{ user.name }</h4>
                        <p className="card-text">factory</p>
                        <button className="btn btn-primary">
                           email
                       </button>
                    </div>
                </div>
            </div>
        ))
     }
    </div>
)


class Users extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users } = this.props;

        if (!users) {
            return <div>loading...</div>;
        }
        console.log(users)

        return (
            <div>
                <UserList
                    users={users}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return { users: users }
}

export default connect(mapStateToProps, { fetchUsers })(Users);