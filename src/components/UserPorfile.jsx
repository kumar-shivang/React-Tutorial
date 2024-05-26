import UserFavoriteFood from "./UserFavoriteFood";
import UserUsername from "./UserUsername";
import Proptypes from "prop-types";
function UserProfile(props) {
  return (
    <>
      {/* INFO: passing props to childern components is called prop drilling */}
      <UserUsername username={props.username} />
      <span>{props.email}</span>
      <UserFavoriteFood />
    </>
  );
}

UserProfile.proptypes = {
  username: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
};
export default UserProfile;
