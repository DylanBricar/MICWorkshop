import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const Messages = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: "#d5d5d5",
          padding: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png",
          }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 21 }}>
            Chat with Lionnel{" "}
          </Text>
          <Text style={{ opacity: 0.6 }}>already 1902 messages.</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignContent: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <ScrollView
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 16,
            paddingBottom: 40,
            marginBottom: 0,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <View
              style={{
                width: "auto",
                padding: 8,
                borderRadius: 4,
                marginBottom: 8,
                marginLeft: 32,
                flexDirection: "column",
                alignItems: "flex-end",
                alignContent: "flex-end",
                alignItems: "flex-end",
                backgroundColor: "#e8ebfa",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  opacity: 0.6,
                }}
              >
                <Text style={{ marginRight: 8 }}>11 Fevrier 2022</Text>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ marginRight: 8, opacity: 0.8 }}>Lionnel</Text>
                </View>
              </View>
              <View style={{ paddingTop: 4 }}>
                <Text
                  style={{
                    color: "#333",
                    fontSize: 15,
                    opacity: 0.9,
                    fontWeight: "bold",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </View>
            </View>
          ))}
          {[1, 2, 3].map((item, idenx) => (
            <View
              style={{
                width: "auto",
                padding: 8,
                borderRadius: 4,
                marginBottom: 8,
                flexDirection: "column",
                backgroundColor: "#86BB71",
                color: "white",
                marginRight: 32,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  opacity: 0.6,
                }}
              >
                <Text
                  style={{ marginRight: 8, opacity: 0.8, fontWeight: "bold" }}
                >
                  Lionnel
                </Text>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ marginRight: 8, color: "white" }}>
                    11 Fevrier 2022
                  </Text>
                </View>
              </View>
              <View style={{ paddingTop: 4 }}>
                <Text style={{ color: "white", fontSize: 15, opacity: 0.9 }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#d5d5d5",
          padding: 15,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            backgroundColor: "white",
            maxHeight: 50,
            color: "#333",
            padding: 10,
            flex: 1,
          }}
          multiline={true}
          numberOfLines={2}
        >
          Message
        </TextInput>
        <TouchableOpacity
          style={{
            padding: 16,
            paddingTop: 16,
            paddingBotom: 16,
            backgroundColor: "#3e414c",
          }}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messages;
