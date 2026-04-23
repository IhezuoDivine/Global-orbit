import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  time: string;
}

const messages: Message[] = [
  { id: "1", text: "Hey bro 👋", sender: "other", time: "10:00 AM" },
  { id: "2", text: "What’s up?", sender: "me", time: "10:01 AM" },
  { id: "3", text: "Working on my app", sender: "me", time: "10:02 AM" },
  { id: "4", text: "Nice 🔥 keep going!", sender: "other", time: "10:05 AM" },
];

export default function ChatScreen() {
  const chatUser = {
    name: "dev_master",
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerName}>{chatUser.name}</Text>
        </View>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5ddd5",
  },

  header: {
    padding: 15,
  },

  headerName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
  },

  // ✅ Your message (right side)
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },

  // ✅ Other person (left side)
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },

  messageText: {
    fontSize: 14,
  },

  time: {
    fontSize: 10,
    color: "#555",
    marginTop: 4,
    alignSelf: "flex-end",
  },
});
