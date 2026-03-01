import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.splash}>
          <Text>Home</Text>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 120,
  },
});
