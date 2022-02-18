const User = ({ index, user }) => {
  const getTimeDiff = () => {
    let datetime = new Date(user.updatedAt).getTime();
    let now = new Date().getTime();

    if (isNaN(datetime)) {
      return "";
    }

    let milisec_diff = datetime < now ? now - datetime : datetime - now;

    let days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    let date_diff = new Date(milisec_diff);

    let string = "";

    if (days > 0) {
      string += days;
      string += days == 1 ? " day " : " days ";
    }

    if (date_diff.getHours() > 0) {
      string += date_diff.getHours();
      string += date_diff.getHours() == 1 ? " hour " : " hours ";
    }

    if (date_diff.getMinutes() > 0) {
      string += date_diff.getMinutes();
      string += date_diff.getMinutes() == 1 ? " minute " : " minutes ";
    }

    return string;
  };

  return (
    <li key={index} className="clear_fix user-button">
      <img
        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
        alt="avatar"
        height={60}
      />
      <div className="about">
        <div className="name">{user.name}</div>
        <div className="status">
          <i
            className={`fa fa-circle ${user.connected ? "online" : "offline"}`}
          ></i>
          {user.connected ? "online" : getTimeDiff()}
        </div>
      </div>
    </li>
  );
};

export default User;
