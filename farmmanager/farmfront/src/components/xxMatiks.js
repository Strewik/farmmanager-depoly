import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Animated,
  Image,
  TouchableHighlight,
  StatusBar
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
class Advance extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      username: "",
      password: "",
      Users: []
    }),
      (this.fadeAnimation = new Animated.Value(0));
  }
  componentWillMount() {
    this.props.Loggedin === true
      ? this.props.navigation.navigate("ScreenThree")
      : null;
    const apiUrl = "https://bcd123c1.ngrok.io";
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ Users: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }
  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true
    }).start();
  }
  validation = () => {
    const { username, password, Users } = this.state;
    if (username == "") {
      this.setState({ Error: "Please enter username!" });
      return false;
    } else if (password == "") {
      this.setState({ Era: "Please enter correct password!" });
      return false;
    } else {
      Users.map(i =>
        i.user_name === username && i.password === password
          ? (this.props.setplayer(i.user_name, i.password, i.user_id),
            this.props.navigation.navigate("Farm Form"))
          : null
      );
      // alert(JSON.stringify(Users));
    }
  };
  render() {
    return (
      <View>
        <KeyboardAwareScrollView
          style={{ backgroundColor: "rgb(63,12,91)" }}
          behavior="padding"
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={false}
        >
          <StatusBar hidden={true} />
          <ImageBackground
            // source={require("../assets/otyohomee.jpg")}
            style={styles.container}
          >
            <Animated.Text
              style={[styles.otyotext, { opacity: this.fadeAnimation }]}
            >
              Otyo!
            </Animated.Text>
            <Image
              // source={require("../assets/zigzag-White.png")}
              style={styles.whitescribble}
            />
            <Animated.Text
              style={[styles.textone, { opacity: this.fadeAnimation }]}
            >
              By Sooo Many Stories
            </Animated.Text>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#fff"
              style={styles.input}
              onChangeText={username => this.setState({ username })}
            />
            <Image
              // source={require("../assets/user.png")}
              style={styles.user}
            />
            <Text style={styles.err}>{this.state.Error}</Text>
            <TextInput
              style={styles.place}
              placeholder="Password"
              placeholderTextColor="#fff"
              style={styles.input}
              password={true}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
            <Image
              // source={require("../assets/password.png")}
              style={styles.passwordimage}
            />
            <Text style={styles.err}>{this.state.Era}</Text>
            <TouchableHighlight
              style={styles.loginone}
              onPress={this.validation}
            >
              <Text style={styles.loginbutton}>Log In</Text>
            </TouchableHighlight>
            <Text style={styles.endpage}>
              New user?
              <Text
                style={styles.signupbutton}
                onPress={() => this.props.navigation.navigate("Advance Form")}
              >
                Sign Up
              </Text>
            </Text>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    teamArray: state.teamArray,
    teamName: state.teamName,
    memberArray: state.memberArray,
    counter: state.counter,
    Loggedin: state.Loggedin
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setplayer: (activeperson, activepassword, userid) =>
      dispatch({
        type: "SET_PLAYER",
        player: activeperson,
        password: activepassword,
        login: true,
        Userid: userid
      })
  };
}
const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%")
  },
  user: {
    width: 30,
    height: 30,
    marginLeft: 275,
    marginTop: -30
  },
  passwordimage: {
    width: 30,
    height: 30,
    marginLeft: 275,
    marginTop: -30
  },
  otyotext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("25"),
    marginTop: wp("45"),
    marginLeft: wp("20"),
    fontFamily: "heading"
  },
  whitescribble: {
    width: 140,
    height: 34,
    marginLeft: 115
  },
  textone: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "subheading",
    fontWeight: "bold",
    marginLeft: 120,
    marginTop: 20
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    width: 240,
    height: 38,
    marginLeft: 70,
    marginTop: 20,
    fontWeight: "bold",
    fontFamily: "bodytext",
    color: "rgb(55,211,0)",
    fontSize: 20,
    borderColor: "white"
  },
  loginone: {
    backgroundColor: "#fff",
    width: 220,
    height: 38,
    borderRadius: 5,
    marginLeft: 85,
    marginTop: 35
  },
  loginbutton: {
    color: "#6A00A8",
    padding: 10,
    marginLeft: 80
  },
  endpage: {
    color: "#fff",
    marginLeft: 130,
    fontFamily: "bodytext",
    marginTop: 10
  },
  signupbutton: {
    color: "#00FF00"
  },
  err: {
    color: "red",
    textAlign: "left",
    fontSize: 20
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Advance);
