import React, { PropTypes as pt } from "react";
import { connect } from "react-redux";

class UserContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleChangeLogin = this.handleChangeLogin.bind(this)

    this.state = {
      login: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id && nextProps.id !== 'create' && this.props.id !== nextProps.id) {
      this.props.dispatch({type: 'USER_FETCH', id: nextProps.id});
    }
  }

  handleRemove(e) {
    const id = e.target.value
    if (confirm('Are you sure?')) {
      this.props.dispatch({type: 'USER_DELETE', id})
    }
  }

  handleCreate(e) {
    this.props.dispatch({type: 'USER_CREATE', login: this.state.login })
  }

  handleChangeLogin(e) {
    const login = e.target.value
    this.setState({ login })
  }

  render() {
    const { user, userList, isCreate } = this.props
    return (
      <div className="userCard">
        <div className="userCard__actions">
            <button type="button" value={user.ID} onClick={isCreate ? this.handleCreate : this.handleRemove}>
                {isCreate ? 'Create new' : 'Remove user'}
            </button>
        </div>
        {!isCreate && <div className="userCard__id">
            {user.ID}
        </div>}
        <div className="userCard__login">
            {isCreate ? <input type="text" name="Login" className="userCard__input" placeholder="Login" value={this.state.login} onChange={this.handleChangeLogin} /> : user.Login}
        </div>
        <div className="userCard__image">
            <img src={user.AvatarURL || '/media/avatar_default.png'} className="userCard__avatar" />
        </div>
      </div>
    );
  }
}

UserContainer.propTypes = {
  user: pt.object,
  isCreate: pt.bool
}

UserContainer.defaultProps = {
  user: {},
  isCreate: pt.bool
}

export default connect(({ users }, { id }) => ({
  user: users.mapById[id] || {},
  isCreate: id === 'create'
}))(UserContainer);