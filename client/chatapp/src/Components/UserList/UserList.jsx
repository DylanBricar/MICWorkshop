import User from "../User/User";

const UserList = ({ users }) => {
  return (
    <ul className="list">
      {users.map((item, index) => (
        <User key={index} user={item} />
      ))}
    </ul>
  );
};

export default UserList;
