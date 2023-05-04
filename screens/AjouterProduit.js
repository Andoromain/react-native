import React, { Component, useRef } from "react";
import { StyleSheet, View, Alert } from "react-native";
import InDesign from "../components/InDesign";
import InPrix from "../components/InPrix";
import InQuantite from "../components/InQuantite";
import BtnSave from "../components/BtnSave";
import BtnCancel from "../components/BtnCancel";
import domain  from "../global";

function AjouterProduit(props){
  const design = useRef()
  const prix = useRef()
  const quantite = useRef()
  const createProduct = ()=>{
    const product = {
      design: design.current.value,
      prix: prix.current.value,
      quantite: quantite.current.value,
    };
    fetch(`${domain()}/api/produits/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then((res)=>res.json())
    .then((resJson)=>{
      alert("Creation de produit reussi");
      Alert.alert('Creation de produit reussi')
      props.navigation.navigate('Liste')
    }).catch((error)=>{
      console.error(error)
    })
  }
  return (
    <View style={styles.container}>
      <InDesign state={design} style={styles.materialHelperTextBox}></InDesign>
      <InPrix state={prix} style={styles.materialHelperTextBox}></InPrix>
      <InQuantite state={quantite} style={styles.materialHelperTextBox}></InQuantite>
      <View style={styles.materialButtonSuccessRow}>
        <BtnSave  style={styles.materialButtonSuccess} onPress={createProduct}></BtnSave>
        <BtnCancel style={styles.materialButtonDanger} onPress={()=>props.navigation.navigate('Liste')}></BtnCancel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialHelperTextBox: {
    height: 90,
    width: 325,
    marginTop: 46,
    marginLeft: 27
  },
  materialButtonSuccess: {
    height: 36,
    width: 131
  },
  materialButtonDanger: {
    height: 36,
    width: 120,
    marginLeft: 33
  },
  materialButtonSuccessRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 39,
    marginRight: 52
  }
});

export default AjouterProduit;
