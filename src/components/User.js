import React, { PropTypes as pt } from "react";
import { Link } from 'react-router';

export default class User extends React.Component {
  
  render() {
    const { ID, Login, AvatarURL, isSelected, isRemoved } = this.props
    
    let className = 'user'
    if (isRemoved) {
      className = `${className} user_removed`
    } else if (isSelected) {
      className = `${className} user_selected`
    }

    return (
      <Link className={className} to={{ pathname: '/', query: { user: ID } }}>
        <div className="user__image">
          <img src={AvatarURL || '/media/avatar_default.png'} />
        </div>
        <div>
          <div className="user__login">
            {Login}
          </div>
          <div className="user__id">
            <b>ID</b> {ID}
          </div>
        </div>
      </Link>
    );
  }
}

User.propTypes = {
  ID: pt.string,
  Login: pt.string,
  AvatarURL: pt.string,
  isSelected: pt.bool
}