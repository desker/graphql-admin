import React, { PropTypes as pt } from "react";
import { connect } from "react-redux";

class UserContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch({type: 'USER_FETCH', id: this.props.id});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id && this.props.id !== nextProps.id) {
      this.props.dispatch({type: 'USER_FETCH', id: nextProps.id});
    }
  }

  render() {
    const { user, userList } = this.props
    return (
      <div className="userCard">
        <div className="userCard__image">
            <img src={user.AvatarURL || '/media/avatar_default.png'} className="userCard__avatar" />
        </div>
        <div className="userCard__login">
            {user.Login}
        </div>
        <div className="userCard__id">
            {user.ID}
        </div>
      </div>
    );
  }
}

UserContainer.propTypes = {
  user: pt.object
}

UserContainer.defaultProps = {
  user: {}
}

export default connect(({ users }, { id }) => ({
  user: users.mapById[id]
}))(UserContainer);