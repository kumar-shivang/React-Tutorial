import useFetchUser from "../utils/hooks/useFetchUser";
export default function UserProfile({ userId }) {
  let [userData, loading] = useFetchUser(userId);
  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1>{userData.username}</h1>
          <h2>{userData.name}</h2>
          <h3>{userData.email}</h3>
        </div>
      )}
    </div>
  );
}
