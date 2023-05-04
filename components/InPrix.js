import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function InPrix(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.prixDuProduit}>Prix du produit</Text>
      <TextInput ref={props.state} placeholder="Prix" style={styles.inputStyle}></TextInput>
      <Text style={styles.enAriary}>(en Ariary)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  prixDuProduit: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    paddingTop: 16
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 8,
    flex: 1,
    paddingBottom: 8,
    width: 340
  },
  enAriary: {
    fontSize: 10,
    textAlign: "left",
    color: "rgba(14,202,245,1)",
    opacity: 0.6,
    paddingTop: 8
  }
});

export default InPrix;
