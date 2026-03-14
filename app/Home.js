import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import Footer from "../components/Footer";
import { FontAwesome } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Profile from "./Profile/profile";
import { useRouter } from "expo-router";

const sellerImage = "https://i.pravatar.cc/150?img=3";
const productImage = "https://picsum.photos/400/300";
const businessName = "TechHub Store";
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" backgroundColor="black" />

      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.screen}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headercontainer}>
            <Text style={styles.head}>Green</Text>
            <Pressable style={styles.messageButton}>
              <FontAwesome name="envelope" size={26} color="#fff" />
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trustedbox}
          >
            <View style={styles.person}>
              <Image
                source={require("../assets/p2.jpg")}
                style={styles.avatar}
              />

              <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
                John Global LTD
              </Text>
            </View>

            <View style={styles.person}>
              <Image
                source={require("../assets/p3.jpg")}
                style={styles.avatar}
              />
              <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
                Marynnnnnnnnnnnnnnnnnnnnnnnnnnnnn
              </Text>
            </View>

            <View style={styles.person}>
              <Image source={{ uri: sellerImage }} style={styles.avatar} />
              <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
                TechHub Store
              </Text>
            </View>

            <View style={styles.person}>
              <Image
                source={require("../assets/p4.jpg")}
                style={styles.avatar}
              />
              <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
                EmmyTex LTD
              </Text>
            </View>
          </ScrollView>
          <View style={styles.post}>
            <View style={styles.postheader}>
              <View style={styles.postheaderbox}>
                <Image
                  source={{ uri: sellerImage }}
                  style={styles.postavatar}
                />
                <Text style={styles.businessName}>{businessName}</Text>{" "}
              </View>
              <Text style={styles.trust}>⭐ Trust</Text>
            </View>

            <Image source={{ uri: productImage }} style={styles.postImage} />

            <View style={styles.actions}>
              <Text>❤️ Like</Text>
              <Text>💬 Comment</Text>
            </View>
          </View>
          <View style={styles.post}>
            <View style={styles.postheader}>
              <View style={styles.postheaderbox}>
                <Image
                  source={{ uri: sellerImage }}
                  style={styles.postavatar}
                />
                <Text style={styles.businessName}>{businessName}</Text>{" "}
              </View>
              <Text style={styles.trust}>⭐ Trust</Text>
            </View>

            <Image source={{ uri: productImage }} style={styles.postImage} />

            <View style={styles.actions}>
              <Text>❤️ Like</Text>
              <Text>💬 Comment</Text>
            </View>
          </View>
        </ScrollView>

        <Footer />
      </SafeAreaView>
    </View>
  );
}

function CustomDrawer(props) {
  const router = useRouter();

  return (
    <DrawerContentScrollView {...props} style={styles.drawcontainer}>
      {/* User header */}
      <Pressable
        style={styles.userHeader}
        onPress={() => router.push("/Profile/profile")}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          style={styles.avatar}
        />
        <Text style={styles.drawname}>Name </Text>
        <Text style={styles.drawusername}>UserName </Text>
      </Pressable>

      {/* Drawer items */}
      <DrawerItemList
        {...props}
        activeTintColor="#00ff88"
        inactiveTintColor="white"
        labelStyle={{ fontSize: 16, fontWeight: "600" }}
      />

      {/* Optional extra item */}
      <Pressable style={styles.logoutButton} onPress={() => alert("Logout")}>
        <Text style={{ color: "white" }}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}

export default function profiledisplay() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: true,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
  scrollContent: {
    paddingBottom: 120,
  },
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 10,
  },
  head: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    alignItems: "center",
    textAlign: "center",

    marginLeft: "30%",
  },
  messageButton: {
    color: "#fff",
    paddingRight: 20,
  },
  trustedbox: {
    flexDirection: "row",
    paddingVertical: 2,
    borderRadius: 10,
  },

  person: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 8,
  },

  avatar: {
    width: 60,
    height: 60,
    padding: 3,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    maxWidth: 70,
  },
  post: {
    backgroundColor: "#fff",
    marginVertical: 15,
    height: 500,
    borderRadius: 10,
    borderColor: "#292828",
    borderTopWidth: 2,
    marginTop: 20,
  },

  postheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#000",
    gap: 10,
  },
  postheaderbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  businessName: {
    color: "#fff",
  },
  postavatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  postImage: {
    width: "100%",
    height: 400,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
  },
  trust: {
    color: "#fff",
  },
  drawcontainer: {
    backgroundColor: "#000",
    top: -30,
  },
  userHeader: {
    margin: 10,
    alignItems: "center",
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: "#313030",
    position: "fixed",
    zIndex: 100,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  drawname: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  drawusername: {
    color: "white",
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
