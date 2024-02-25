import React, { Component } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
//import image from "../assets/background.png";
export default class UserProfileView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.location}
              //source={require("../assets/locationSvg.svg")}
            />
          </View>
          <View>
            <Image
              style={styles.hamburger}
              //source={require("../assets/HamburgerIcon.png")}
            />
          </View>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Welcome</Text>
              <Text style={styles.userInfo}>Aniket Kumar</Text>
            </View>

          </View>
        </View>

        <View style={styles.body}>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>location</Text>
            <Text style={styles.SubjectText}>HYDERABAD</Text>
          </Pressable>
          <Pressable style={styles.RectangleShapeView}>
            <Text style={styles.headtText}>Name</Text>
            <Text style={styles.SubjectText}>Rishith</Text>
          </Pressable>
          <View>
            <Pressable style={styles.btn}>
              <Text style={styles.text}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  headerContent: {
    padding: 30,
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
    float: "right"
  },
  location: {
    borderColor: "white",
    width: 10,
    height: 10,
    float: "left"
  },
  hamburger: {
    borderColor: "white",
    width: 10,
    height: 10,
    float: "right"
  },
  name: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
    fontFamily: "Helvetica"
  },
  headtText: {
    fontFamily: "Helvetica",
    color: "grey",
    fontWeight: "600",
    float: "left",
    marginLeft: 20,
    marginTop: 10
  },
  SubjectText: {
    color: "black",
    fontWeight: "550",
    fontSize: 16,
    fontFamily: "Helvetica",
    float: "left",
    marginLeft: 20,
    marginTop: 10
  },
  userInfo: {
    fontSize: 20,
    color: "white",
    fontWeight: "600"
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#3B525F",
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    padding: "6px",
    elevation: 3
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center"
  },
  text: {
    color: "white",
    margin: 10
  },
  RectangleShapeView: {
    marginTop: 20,
    width: "80%",
    height: 80,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3
  }
});