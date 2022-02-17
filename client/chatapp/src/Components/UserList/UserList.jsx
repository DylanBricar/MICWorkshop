import User from "../User/User";

const UserList = (props) => (
  <ul className="list">
    <User
      name="Aiden Chave"
      avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
      isOnline={true}
    />
    <User
      name="Vincent Porter"
      avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
      isOnline={false}
      timeLeft="left 30 mins ago"
    />
  </ul>
);

export default UserList;
