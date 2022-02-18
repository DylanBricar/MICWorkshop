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

const Users = ({ navigation }) => {
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
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 23,
            marginBottom: 10,
            color: "white",
          }}
        >
          Friends
        </Text>
      </View>
      <View className="search">
        <TextInput style={style.pplLInput} placeholder="Search" />
      </View>
      <View className="row">
        <View className="col-12">
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#565964",
              padding: 15,
              marginTop: 15,
              color: "white",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
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
              <View
                style={{
                  color: "#92959E",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
                className="status"
              >
                <View
                  style={{
                    height: 8,
                    width: 8,
                    backgroundColor: "#86BB71",
                    marginTop: 8,
                    marginRight: 8,
                  }}
                ></View>
                <Text
                  style={{
                    marginTop: 3,
                    marginRight: 8,
                    color: "white",
                    opacity: 0.5,
                  }}
                >
                  {" "}
                  online{" "}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            paddingTop: 8,
            paddingBottom: 8,
            opacity: 0.76,
          }}
        >
          You have 3724 friends.
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{}}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: "#565964",
                padding: 10,
                marginTop: 15,
                color: "white",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
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
                    Lionnel
                  </Text>
                </View>
                <View
                  style={{
                    color: "#92959E",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                  }}
                  className="status"
                >
                  <View
                    style={{
                      height: 8,
                      width: 8,
                      backgroundColor: "#86BB71",
                      marginTop: 8,
                      marginRight: 5,
                    }}
                  ></View>
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
});

export default Users;
