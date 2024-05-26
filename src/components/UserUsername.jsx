import PropTypes from "prop-types";
function UserUsername(props) {
  return (
    <div>
      <b>
        Username: <span>{props.username}</span>
      </b>
    </div>
  );
}
UserUsername.proptypes = {
  username: PropTypes.string.isRequired,

  // NOTE: Proptype violaton is not caught by the compiler right now,
  // I will fix this in the next commit
};

export default UserUsername;
