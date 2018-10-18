import React, { PropTypes as pt } from "react";
import { Link } from 'react-router';

export default class User extends React.Component {
  
  render() {
    const { ID, Login, AvatarURL, isSelected } = this.props
    
    return (
      <Link className={isSelected ? 'user user_selected' : 'user'} to={{ pathname: '/', query: { user: ID } }}>
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