import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

interface User {
  id: string;
  username: string;
  avatar: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

const users: User[] = [
  { id: "1", username: "code_engr", avatar: "https://i.pravatar.cc/150?img=1" },
  {
    id: "2",
    username: "dev_master",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    username: "frontend_guru",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "React Tips",
    content: "Learn hooks properly",
    author: "code_engr",
  },
  {
    id: "2",
    title: "Django API",
    content: "Build scalable APIs",
    author: "dev_master",
  },
  {
    id: "3",
    title: "CSS Tricks",
    content: "Flexbox is powerful",
    author: "frontend_guru",
  },
];

export default function UniversalSearch() {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.username.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>

        <TextInput
          placeholder="Search users and posts..."
          value={query}
          onChangeText={setQuery}
          style={styles.input}
        />

        <Text style={styles.section}>Users</Text>
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.username}>{item.username}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>No users found</Text>}
        />

        <Text style={styles.section}>Posts</Text>
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postContent}>{item.content}</Text>
              <Text style={styles.author}>by {item.author}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>No posts found</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  section: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 8,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "500",
  },
  postCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postContent: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },
  author: {
    fontSize: 12,
    color: "#888",
  },
  empty: {
    color: "#999",
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
});

// ================= NOTIFICATION SYSTEM =================

interface Notification {
  id: string;
  type: "like" | "follow" | "comment";
  message: string;
  time: string;
}

const notificationsData: Notification[] = [
  {
    id: "1",
    type: "like",
    message: "dev_master liked your post",
    time: "2m ago",
  },
  {
    id: "2",
    type: "follow",
    message: "frontend_guru started following you",
    time: "10m ago",
  },
  {
    id: "3",
    type: "comment",
    message: "code_engr commented: Nice work!",
    time: "1h ago",
  },
];

export function NotificationsScreen() {
  const renderIcon = (type: Notification["type"]) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.icon}>{renderIcon(item.type)}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.notificationText}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
