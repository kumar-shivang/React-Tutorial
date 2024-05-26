import PropTypes from "prop-types";
export default function UserUsername(props) {
  return (
    <>
      <b>
        Username : <span>{props.username}</span>
      </b>
      <br />
    </>
  );
}

UserUsername.proptypes = {
  username: PropTypes.instanceOf(String).isRequired,
};
