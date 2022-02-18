import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";

const Users = ({ navigation }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("http://localhost:4445/user", { method: "GET" })
      .then((data) => data.json())
      .then((data) => {
        console.log("Users :", data);
        setUser(data);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  const navigateToMessagesPage = () => {
    navigation.navigate("Messages", {});
  };
  return (
    <KeyboardAvoidingView
      style={style.peopleList}
      className="people-list col-4"
      id="people-list"
    >
      <View>
        <Text style={style.bigContainer}>Friends</Text>
      </View>
      <View className="search">
        <TextInput style={style.pplLInput} placeholder="Search" />
      </View>
      <View className="row">
        <View className="col-12">
          <TouchableOpacity
            style={style.btnTouchableTeamChat}
            onPress={() => navigateToMessagesPage()}
          >
            {/* className={props.currentChannel === "GLOBAL" ? "clear_fix team-button active" : "clear_fix team-button"} */}
            {/* onClick={(e) => channelSelected(e, "GLOBAL")} */}
            {/* <img src="https://cdn2.iconfinder.com/data/icons/seo-flat-6/128/38_Target_Audience-1024.png" alt="avatar" height={60} /> */}
            <Image
              style={{ width: 50, height: 40 }}
              source={{
                uri: "https://cdn2.iconfinder.com/data/icons/seo-flat-6/128/38_Target_Audience-1024.png",
              }}
            />
            <View style={{ marginLeft: 10, padding: 0 }} className="about">
              <View className="name">
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 19 }}
                >
                  Team chat
                </Text>
              </View>
              <View style={style.statusUser} className="status">
                <View style={style.userMargin}></View>
                <Text style={style.onlineMargin}> online </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={style.countFriends}>You have 3724 friends.</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{}}>
          {user.map((item, index) => (
            <TouchableOpacity style={style.btnTouchableChat}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png",
                }}
              />
              <View style={{ marginLeft: 10, padding: 0 }} className="about">
                <View className="name">
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 19 }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View style={style.statusOther} className="status">
                  <View style={style.marginOther}></View>
                  <Text style={{ marginTop: 3, color: "white", opacity: 0.5 }}>
                    {" "}
                    online{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  peopleList: {
    backgroundColor: "#444753",
    color: "white",
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    display: "flex",
  },
  ppLSearch: { padding: 15 },
  pplLInput: {
    borderRadius: 3,
    borderWidth: 0,
    padding: 14,
    color: "white",
    backgroundColor: "#6A6C75",
    fontSize: 14,
  },
  pplListUL: {
    padding: 20,
    height: 770,
    padding: 30,
  },
  bigContainer: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 10,
    color: "white",
  },
  btnTouchableTeamChat: {
    borderWidth: 1,
    borderColor: "#565964",
    padding: 15,
    marginTop: 15,
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  statusUser: {
    color: "#92959E",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  userMargin: {
    height: 8,
    width: 8,
    backgroundColor: "#86BB71",
    marginTop: 8,
    marginRight: 8,
  },
  onlineMargin: {
    marginTop: 3,
    marginRight: 8,
    color: "white",
    opacity: 0.5,
  },
  btnTouchableChat: {
    borderWidth: 0.5,
    borderColor: "#565964",
    padding: 10,
    marginTop: 15,
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  countFriends: {
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
    opacity: 0.76,
  },
  marginOther: {
    height: 8,
    width: 8,
    backgroundColor: "#86BB71",
    marginTop: 8,
    marginRight: 5,
  },
  statusOther: {
    color: "#92959E",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
});

export default Users;
