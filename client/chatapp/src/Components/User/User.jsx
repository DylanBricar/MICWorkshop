const User = ({ name, isOnline, avatar, timeLeft }) => (
  <li className="clear_fix user-button">
    <img src={avatar} alt="avatar" height={60} />
    <div className="about">
      <div className="name">{name}</div>
      <div className="status">
        <i className={`fa fa-circle ${isOnline ? "online" : "offline"}`}></i>
        {isOnline ? "online" : timeLeft}
      </div>
    </div>
  </li>
);

export default User;
