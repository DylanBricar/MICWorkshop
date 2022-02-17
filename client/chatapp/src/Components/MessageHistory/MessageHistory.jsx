import Message from "../Message/Message";

const MessageHistory = (props) => (
  <ul>
    <Message
      isMe={true}
      time="10:12 AM, Today"
      message="Are we meeting today? Project has been already finished and I have results to show you."
      user="Vincent"
    />
    <Message
      isMe={false}
      time="10:14 AM, Today"
      message="Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?"
      user="Olia"
    />
  </ul>
);

export default MessageHistory;
