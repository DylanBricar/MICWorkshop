const Message = ({ isMe, time, message, user }) => {
  if (isMe) {
    return (
      <li>
        <div className="message-data">
          <span className="message-data-name">
            <i className="fa fa-circle online"></i> {user}
          </span>
          <span className="message-data-time">{time}</span>
        </div>
        <div className="message my-message">{message}</div>
      </li>
    );
  } else {
    return (
      <li className="clear_fix">
        <div className="message-data align-right">
          <span className="message-data-time">{time}</span> &nbsp; &nbsp;
          <span className="message-data-name">{user}</span>{" "}
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">{message}</div>
      </li>
    );
  }
};

export default Message;
