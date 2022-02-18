import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }) => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("user", {});

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  const getUserFromLocalStorage = async () => {
    try {
      const u = await AsyncStorage.getItem("user");
      if (u !== null) {
        setUser(u);
      }
    } catch (e) {
      // alert('Failed to fetch the data from storage')
    }
  };
  console.log("Retrieved User : ", user);

  const connectUser = (event) => {
    event.preventDefault();
    var obj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, password: password }),
    };
    console.log("Connecting : ", obj);

    fetch("http://localhost:4445/user/connect", obj)
      .then((data) => data.json())
      .then((data) => {
        console.log("Connected :", data);
        setUser(data);
        navigation.navigate("Users", {});
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  return (
    <>
      <View style={style.mainContainer}>
        <View style={style.innerContainer}>
          <Text style={style.title}>Log In</Text>
          <TextInput
            placeholder="Username"
            style={style.inputUsername}
            onChangeText={(e) => setUsername(e)}
            value={name}
          />
          <TextInput
            placeholder="Password"
            style={style.inputPassword}
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
          <Text>Entrez vos informations.</Text>
          <Pressable
            title="Login"
            style={style.loginButton}
            onPress={connectUser}
          >
            <Text style={{ color: "#ffffff" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    // display: 'flex',
    padding: 30,
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    // borderWidth: 1,
    // borderColor: "yellow",
  },
  innerContainer: {
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    // borderWidth: 1,
    // borderColor: "red",
  },
  title: {
    fontSize: 55,
    marginBottom: 32,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
  },
  inputUsername: {
    borderColor: "#eee",
    borderWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    lineHeight: 30,
  },
  inputPassword: {
    borderColor: "#eee",
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    lineHeight: 30,
  },
  loginButton: {
    borderRadius: 12,
    marginTop: 32,
    marginBottom: 32,
    padding: 20,
    backgroundColor: "#6B92A4",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
  },
});

export default Login;
