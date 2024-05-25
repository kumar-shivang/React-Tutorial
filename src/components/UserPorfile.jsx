import UserFavoriteFood from "./UserFavoriteFood";
export default function UserProfile() {
  return (
    <div>
      <p>Username: Bob</p>
      <span>Email</span>
      <span>Bob@bob.bob</span>
      <UserFavoriteFood />
    </div>
  );
}
