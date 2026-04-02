import React from "react";
import { Pressable, Image, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const sellerImage = "https://i.pravatar.cc/150?img=3";

type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
};

export default function CustomDrawer(props: any) {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <DrawerContentScrollView {...props} style={styles.drawcontainer}>
      <Pressable
        style={styles.userHeader}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image source={{ uri: sellerImage }} style={styles.avatar} />
        <Text style={styles.drawname}>Name</Text>
        <Text style={styles.drawusername}>UserName</Text>
      </Pressable>

      <DrawerItemList
        {...props}
        labelStyle={{ fontSize: 16, fontWeight: "600" }}
      />
      <ThemeToggle />

      <Pressable style={styles.logoutButton} onPress={() => alert("Logout")}>
        <Text style={{ color: "white" }}>Logout</Text>
      </Pressable>
      
    </DrawerContentScrollView>
  );
}

const getStyles = (theme: any) =>
  StyleSheet.create({
    drawcontainer: {
      backgroundColor: theme.background,
    },
    userHeader: {
      margin: 10,
      alignItems: "center",
      paddingBottom: 30,
      borderBottomWidth: 1,
      borderColor: "#313030",
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginBottom: 10,
    },
    drawname: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
    },
    drawusername: {
      color: theme.text,
      fontSize: 16,
    },
    logoutButton: {
      marginTop: 20,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: "#111",
      borderRadius: 8,
      alignItems: "center",
    },
  });
