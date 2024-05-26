import PropTypes from "prop-types";
import React from "react";
import "./styles.css";
function UserUsername(props) {
  return (
    <React.Fragment>
      <b className="username">
        Username: <span>{props.username}</span>
      </b>
      <br />
    </React.Fragment>
  );
}
UserUsername.proptypes = {
  username: PropTypes.string.isRequired,

  // NOTE: Proptype violaton is not caught by the compiler right now,
  // I will fix this in the next commit
};

export default UserUsername;
