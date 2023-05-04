import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View,FlatList,Text, Alert } from "react-native";
import Item from "../components/Item";
import BtnAdd from "../components/BtnAdd";
import Footer from "../components/Footer";
import domain  from '../global';
const alertDelete = (id) => {
  fetch(`${domain()}/api/produits/${id}/delete`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((resJson) => {
      alert("Suppression de produit reussi");
      Alert.alert("Suppression de produit reussi");
    })
    .catch((error) => {
      console.error(error);
    });
}
  // Alert.alert("Alert Title", "My Alert Msg", [
  //   {
  //     text: "Cancel",
  //     onPress: () => console.log("Cancel Pressed"),
  //     style: "cancel",
  //   },
  //   { text: "OK", onPress: () => console.log("OK Pressed") },
  // ]);

  function Liste(props) {
   

    const [datasource,setDatasource]=useState({produits:[]});

    useEffect(()=>{
      getDatas();
    },[datasource])
    const getDatas=()=> {
      return fetch(`${domain()}/api/produits/`)
        .then((response) => response.json())
        .then((responseJson) => {
         setDatasource(responseJson)
        })
        .catch((error) => {
          console.error(error);
        });
    }
    return (
      <View style={styles.container}>
        <View>
          <Footer
            data={{
              min: datasource.prix_minimal,
              max: datasource.prix_maximal,
              total: datasource.total,
            }}
            style={styles.cupertinoFooter2}
          ></Footer>
          <FlatList
            data={datasource.produits}
            //ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item }) => (
              <Item
                delete={() => alertDelete(item.numProduit)}
                data={item}
                navigateToUpdate={() =>
                  props.navigation.navigate("UpdateProduit", {
                    ID: item.numProduit,
                    DESIGN: item.design,
                    PRIX: item.prix,
                    QUANTITE: item.quantite,
                  })
                }
                style={styles.materialCardWithImageAndTitle}
              ></Item>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <BtnAdd
          style={styles.materialButtonShare}
          onPress={() => props.navigation.navigate("AjouterProduit")}
        ></BtnAdd>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  materialCardWithImageAndTitle: {
    height: 120,
    width: 400,
    marginTop: 10,
    marginLeft: 10,
  },
  materialSearchBar: {
    height: 56,
    width: 359,
    marginTop: -234,
    marginLeft: 10,
  },
  materialButtonShare: {
    height: 72,
    width: 72,
    backgroundColor: "rgba(10,249,228,1)",
    marginTop: 370,
    marginLeft: 330,
    position:'fixed'
  },
  cupertinoFooter2: {
    height: 49,
    width:420,
    marginTop: -50,
    position: "fixed"
  },
});

export default Liste;
