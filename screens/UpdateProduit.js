import React, { Component, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View,Alert } from "react-native";
import BtnSaveUp from "../components/BtnSaveUp";
import BtnCancelUp from "../components/BtnCancelUp";
import InDesignUp from "../components/InDesignUp";
import InPrixUp from "../components/InPrixUp";
import InQuantiteUp from "../components/InQuantiteUp";
import domain  from "../global";

function UpdateProduit(props) {
  const route = useRoute()
  const id = route.params.ID
  const olddesign = route.params.DESIGN
  const oldprix = route.params.PRIX
  const oldquantite = route.params.QUANTITE
  const design = useRef()
  const prix = useRef()
  const quantite = useRef()

  const updateProduct = () => {
    const product = {
      design: design.current.value,
      prix: prix.current.value,
      quantite: quantite.current.value,
    };
    fetch(`${domain()}/api/produits/${id}/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((resJson) => {
        alert("Modification de produit reussi");
        Alert.alert("Modification de produit reussi");
        props.navigation.navigate("Liste");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <InDesignUp value={olddesign} state={ design } style={styles.materialStackedLabelTextbox1}></InDesignUp>
      <InPrixUp value={oldprix} state={ prix } style={styles.materialStackedLabelTextbox1}></InPrixUp>
      <InQuantiteUp value={oldquantite} state={ quantite } style={styles.materialStackedLabelTextbox2}></InQuantiteUp>
      <View style={styles.materialButtonPurpleRow}>
        <BtnSaveUp onPress={updateProduct} style={styles.materialButtonPurple}></BtnSaveUp>
        <BtnCancelUp
          style={styles.materialButtonPink}
          onPress={() => props.navigation.navigate("Liste")}
        ></BtnCancelUp>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialButtonPurple: {
    height: 36,
    width: 132,
  },
  materialButtonPink: {
    height: 36,
    width: 140,
    marginLeft: 18,
  },
  materialButtonPurpleRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 39,
    marginRight: 52,
  },
  materialStackedLabelTextbox1: {
    height: 60,
    width: 345,
    marginTop: 76,
    marginLeft: 10,
  },
  materialStackedLabelTextbox2: {
    height: 60,
    width: 345,
    marginTop: 62,
    marginLeft: 10,
  },
});

export default UpdateProduit;
