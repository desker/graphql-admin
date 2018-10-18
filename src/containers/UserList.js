import React, { PropTypes as pt } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router'
import UserContainer from './User'
import User from '../components/User'

// Home page component
class UserList extends React.Component {
  render() {
    const { userList, userId } = this.props

    return (
      <div className="userList">
        <Link to={{ pathname: '/', query: { user: 'create' } }} className="userList__create">
          + Create new user
        </Link>
        
        <div className="userList__list">
          {userList.map(user => (
            <User
              key={user.ID}
              isSelected={user.ID === userId}
              {...user}
            />
          ))}
        </div>
        {!!userId && <div className="userList__selected">
          <UserContainer id={userId} />
        </div>}
      </div>
    );
  }
}

UserList.propTypes = {
  userList: pt.array,
  userId: pt.string
}

UserList.defaultProps = {
  userList: []
}

export default connect(({ users }, { router }) => ({
  userList: users.orderId.map(id => users.mapById[id]),
  userId: router.location.query && router.location.query.user
}))(UserList);