import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HomeComponent from "./components/Home.component";

export default class App extends React.Component {
  state: { signed: boolean; user: String; password: String };

  constructor(props: any) {
    super(props);
    this.state = { user: "", password: "", signed: false };
  }

  render() {
    const { signed } = this.state;
    return (
      <View style={styles.container}>
        {
          !signed ? 
          <View style={styles.container}>
            <Image
              source={{ uri: "https://i.ibb.co/B3TYfwp/myself-001.jpg" }}
              style={{ width: 160, height: 160 }}
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor="#ffa45b"
                onChangeText={this.handleUser}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#ffa45b"
                onChangeText={this.handlePassword}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signinBtn}
              onPress={this.handleSignin}
            >
              <Text style={styles.signinText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.signinText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          :
          <HomeComponent></HomeComponent>
        }
      </View>
    );
  }

  handleUser = (text: String) => {
    this.setState({ user: text });
  };

  handlePassword = (text: String) => {
    this.setState({ password: text });
  };

  handleSignin = () => {
    const { user, password } = this.state;
    if (user && password) {
      alert("You signed in!");
      this.setState({ signed: true });
    } else {
      alert("User and password needed!!!");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffda77",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#6a492b",
  },
  forgotText: {
    color: "#6a492b",
    fontSize: 11,
  },
  signinBtn: {
    width: "80%",
    backgroundColor: "#aee6e6",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signinText: {
    color: "#6a492b",
  },
});
