import React from "react";
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
import Footer from "../components/Footer";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import { useRouter, usePathname } from "expo-router";

const sellerImage = "https://i.pravatar.cc/150?img=3";
const productImage = "https://picsum.photos/400/300";
const businessName = "TechHub Store";

export default function Home() {
  const { theme, mode } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.screen}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.headercontainer}>
            <Text style={styles.head}>Green</Text>
            <Pressable
              style={styles.messageButton}
              onPress={() => router.push("/Message/Namelisting")}
            >
              <FontAwesome name="envelope" size={26} color="#fff" />
            </Pressable>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trustedbox}
          >
            {[
              { name: "John Global LTD", source: require("../assets/p2.jpg") },
              {
                name: "Marynnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
                source: require("../assets/p3.jpg"),
              },
              { name: "TechHub Store", source: { uri: sellerImage } },
              { name: "EmmyTex LTD", source: require("../assets/p4.jpg") },
            ].map((person, idx) => (
              <View key={idx} style={styles.person}>
                <Image source={person.source} style={styles.avatar} />
                <Text
                  style={styles.name}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {person.name}
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.line}></View>
          {[1, 2].map((i, index, arr) => (
            <View key={i}>
              <View style={styles.post}>
                <View style={styles.postheader}>
                  <View style={styles.postheaderbox}>
                    <Image
                      source={{ uri: sellerImage }}
                      style={styles.postavatar}
                    />
                    <Text style={styles.businessName}>{businessName}</Text>
                  </View>
                  <Text style={styles.trust}>⭐ Trust</Text>
                </View>

                <Image
                  source={{ uri: productImage }}
                  style={styles.postImage}
                />

                <View style={styles.actions}>
                  <Text style={styles.writeuptext}>❤️ Like</Text>
                  <Text style={styles.writeuptext}>💬 Comment</Text>
                </View>
                <View style={styles.writeup}>
                  <Text style={styles.writeuptext}>
                    his is not a React Native problem — it’s TypeScript
                    protecting you. In plain JavaScript, this would silently
                    fail or cause UI bugs. TypeScript is forcing you to keep
                    your UI consistent.
                  </Text>
                </View>
              </View>
              {index < arr.length - 1 && <View style={styles.line} />}
            </View>
          ))}
        </ScrollView>

        <Footer />
      </SafeAreaView>
    </View>
  );
}

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 120,
    },
    screen: {
      paddingTop: 10,
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
      color: theme.text,
      textAlign: "center",
      marginLeft: "30%",
    },
    messageButton: {
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
      borderRadius: 50,
      borderWidth: 2,
      borderColor: theme.text,
      marginBottom: 10,
    },
    name: {
      marginTop: 5,
      fontSize: 14,
      color: theme.text,
      textAlign: "center",
      maxWidth: 70,
    },
    post: {
      backgroundColor: theme.background,
      color: theme.text,
      marginVertical: 15,
      height: "auto",
    },
    postheader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: theme.backgound,
      gap: 10,
    },
    postheaderbox: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    businessName: {
      color: theme.text,
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
      color: theme.text,
    },
    line: {
      height: 1,
      backgroundColor: theme.line,
      marginTop: 20,
    },
    writeup: {
      padding: 10,
      fontWeight: "bold",
    },
    writeuptext: {
      color: theme.text,
    },
  });
