import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Footer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <IoniconsIcon
          name="md-trending-down"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "#616161"
            }
          ]}
        ></IoniconsIcon>
        <Text
          style={[
            styles.minimal
          ]}
        >
          {props.data.min} $
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <IoniconsIcon name="logo-tumblr" style={styles.icon3}></IoniconsIcon>
        <Text style={styles.total}>{props.data.total} $</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon name="md-trending-up" style={styles.icon4}></IoniconsIcon>
        <Text style={styles.maximal}>{props.data.max} $</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between",
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "transparent",
    fontSize: 24,
  },
  minimal: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    color: "#f00"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    color: "#00f",
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 49
  },
  icon3: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "#616161",
  },
  icon4: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "#616161"
  },
  maximal: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    color: "#0f0",
  },
});

export default Footer;
