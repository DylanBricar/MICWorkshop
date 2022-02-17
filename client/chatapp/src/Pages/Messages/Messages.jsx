/**
 * Import css
 */
import "./Messages.scss";

var Messages = (props) => (
  <div>
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
          <ul className="list">
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Vincent Porter</div>
                <div className="status">
                  <i className="fa fa-circle online"></i> online
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Aiden Chavez</div>
                <div className="status">
                  <i className="fa fa-circle offline"></i> left 7 mins ago
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Mike Thomas</div>
                <div className="status">
                  <i className="fa fa-circle online"></i> online
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Erica Hughes</div>
                <div className="status">
                  <i className="fa fa-circle online"></i> online
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Ginger Johnston</div>
                <div className="status">
                  <i className="fa fa-circle online"></i> online
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Tracy Carpenter</div>
                <div className="status">
                  <i className="fa fa-circle offline"></i> left 30 mins ago
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Christian Kelly</div>
                <div className="status">
                  <i className="fa fa-circle offline"></i> left 10 hours ago
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Monica Ward</div>
                <div className="status">
                  <i className="fa fa-circle online"></i> online
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Dean Henry</div>
                <div className="status">
                  <i className="fa fa-circle offline"></i> offline since Oct 28
                </div>
              </div>
            </li>
            <li className="clear_fix user-button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png"
                alt="avatar"
                height={60}
              />
              <div className="about">
                <div className="name">Peyton Mckinney</div>
                <div className="status">
                  <i className="fa fa-circle online"></i> online
                </div>
              </div>
            </li>
          </ul>
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
            <ul>
              <li className="clear_fix">
                <div className="message-data align-right">
                  <span className="message-data-time">10:10 AM, Today</span>{" "}
                  &nbsp; &nbsp;
                  <span className="message-data-name">Olia</span>{" "}
                  <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                  Hi Vincent, how are you? How is the project coming along?
                </div>
              </li>
              <li>
                <div className="message-data">
                  <span className="message-data-name">
                    <i className="fa fa-circle online"></i> Vincent
                  </span>
                  <span className="message-data-time">10:12 AM, Today</span>
                </div>
                <div className="message my-message">
                  Are we meeting today? Project has been already finished and I
                  have results to show you.
                </div>
              </li>
              <li className="clear_fix">
                <div className="message-data align-right">
                  <span className="message-data-time">10:14 AM, Today</span>{" "}
                  &nbsp; &nbsp;
                  <span className="message-data-name">Olia</span>{" "}
                  <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                  Well I am not sure. The rest of the team is not here yet.
                  Maybe in an hour or so? Have you faced any problems at the
                  last phase of the project?
                </div>
              </li>
              <li>
                <div className="message-data">
                  <span className="message-data-name">
                    <i className="fa fa-circle online"></i> Vincent
                  </span>
                  <span className="message-data-time">10:20 AM, Today</span>
                </div>
                <div className="message my-message">
                  Actually everything was fine. I'm very excited to show this to
                  our team.
                </div>
              </li>
            </ul>
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
  </div>
);

export default Messages;
