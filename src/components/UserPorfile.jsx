import UserFavoriteFood from "./UserFavoriteFood";
import UserUsername from "./UserUsername";
function UserProfile() {
  return (
    <div>
      <UserUsername username={123} />
      <span>Email</span>
      <span>Bob@bob.bob</span>
      <UserFavoriteFood />
    </div>
  );
}

export default UserProfile;
