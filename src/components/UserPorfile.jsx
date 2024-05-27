import UserFavoriteFood from "./UserFavoriteFood";
import UserUsername from "./UserUsername";
import Proptypes from "prop-types";
import { useState } from "react";
function UserProfile({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  return (
    <>
      <button
        onClick={(e) => {
          setIsEditing((currentState) => !currentState);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          setUsers((currentUsersState) => {
            return currentUsersState.filter((currentUser) => {
              console.log(currentUser.id, user.id);
              return currentUser.id !== user.id;
            });
          });
        }}
      >
        Delete
      </button>
      <br />
      <p>Username:</p>
      {isEditing ? (
        <>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <p>Email:</p>
          <input
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsEditing((currentState) => !currentState);
              () => {
                setUsers((currentUsersState) => {
                  return currentUsersState.map((currentUser) => {
                    if (currentUser.id === user.id) {
                      return { ...currentUser, username, email };
                    }
                    return currentUser;
                  });
                });
              };
            }}
          >
            Save
          </button>

          <br />
        </>
      ) : (
        <>
          <UserUsername username={username} />
          <br />
          <span>{email}</span>
        </>
      )}
      <UserFavoriteFood />
    </>
  );
}

export default UserProfile;
