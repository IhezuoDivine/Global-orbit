import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useRouter, usePathname } from "expo-router";

interface ChatUser {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
}

const chats: ChatUser[] = [
  {
    id: "1",
    name: "dev_master",
    lastMessage: "Keep building bro 🔥",
    time: "2m",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "2",
    name: "frontend_guru",
    lastMessage: "Check your UI flow",
    time: "10m",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function Namelisting() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>

        {chats.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>No messages yet</Text>
            <Text style={styles.subText}>
              Start chatting with people to see them here
            </Text>
          </View>
        ) : (
          <Pressable onPress={() => router.push("/Message/Textbox")}>
            <FlatList
              data={chats}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.chatCard}>
                  <Image source={{ uri: item.avatar }} style={styles.avatar} />

                  <View style={styles.chatInfo}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                      {item.lastMessage}
                    </Text>
                  </View>

                  <Text style={styles.time}>{item.time}</Text>
                </View>
              )}
            />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },

  chatInfo: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
  },

  lastMessage: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  time: {
    fontSize: 12,
    color: "#999",
  },

  emptyBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },

  subText: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
  },
});
