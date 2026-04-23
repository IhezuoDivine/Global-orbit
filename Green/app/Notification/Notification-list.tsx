import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

type NotificationType = "like" | "follow" | "comment";

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  time: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "like",
    message: "dev_master liked your post",
    time: "2m ago",
    isRead: false,
  },
  {
    id: "2",
    type: "follow",
    message: "frontend_guru started following you",
    time: "10m ago",
    isRead: true,
  },
  {
    id: "3",
    type: "comment",
    message: "code_engr commented: Nice work!",
    time: "1h ago",
    isRead: false,
  },
];

const getIcon = (type: NotificationType) => {
  switch (type) {
    case "like":
      return "❤️";
    case "follow":
      return "👤";
    case "comment":
      return "💬";
    default:
      return "🔔";
  }
};

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Notifications</Text>

        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.card, !item.isRead && styles.unread]}>
              <Text style={styles.icon}>{getIcon(item.type)}</Text>

              <View style={styles.content}>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
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
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  unread: {
    backgroundColor: "#eef6ff",
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
});
