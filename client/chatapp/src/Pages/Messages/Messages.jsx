/**
 * Import css
 */
import "./Messages.scss";
import UserList from "../../Components/UserList/UserList";
import MessageHistory from "../../Components/MessageHistory/MessageHistory";

const Messages = (props) => (
  <>
    <div className="container clear_fix d-flex pb-5">
      <div className="row">
        <div className="people-list col-4" id="people-list">
          <div className="search">
            <input type="text" placeholder="search" />
            <i className="fa fa-search"></i>
          </div>
          |
          <div className="row">
            <div className="col-12">
              <div className="clear_fix team-button">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/seo-flat-6/128/38_Target_Audience-1024.png"
                  alt="avatar"
                  height={60}
                />
                <div className="about">
                  <div className="name">Team chat</div>
                  <div className="status">
                    <i className="fa fa-circle online"></i> online
                  </div>
                </div>
              </div>
            </div>
          </div>
          <UserList />
        </div>
        <div className="chat col-8 d-flex flex-column">
          <div className="chat-header clear_fix">
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
              alt="avatar"
            />
            <div className="chat-about">
              <div className="chat-with">Chat with Vincent Porter</div>
              <div className="chat-num-messages">already 1 902 messages</div>
            </div>
            <i className="fa fa-star"></i>
          </div>
          <div className="chat-history flex-fill">
            <MessageHistory />
          </div>
          <div className="chat-message clear_fix">
            <textarea
              name="message-to-send"
              id="message-to-send"
              placeholder="Type your message"
              rows="3"
            ></textarea>
            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Messages;
