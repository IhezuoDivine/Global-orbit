import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
}

export default function AIChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi 👋 I’m your AI assistant. Ask me anything.",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [userMessage, ...prev]);
    setInput("");
    setLoading(true);

    // 🔥 MOCK AI RESPONSE (replace with your API)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `AI response to: "${userMessage.text}"`,
        sender: "ai",
      };

      setMessages((prev) => [aiMessage, ...prev]);
      setLoading(false);
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AI Assistant</Text>
          <Text style={styles.subTitle}>Ask anything, get instant answers</Text>
        </View>

        {/* CHAT */}
        <FlatList
          data={messages}
          inverted
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 12 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.sender === "user" ? styles.userBubble : styles.aiBubble,
              ]}
            >
              <Text
                style={item.sender === "user" ? styles.userText : styles.aiText}
              >
                {item.text}
              </Text>
            </View>
          )}
        />

        {/* LOADING */}
        {loading && (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="small" color="#555" />
            <Text style={styles.loadingText}>AI is typing...</Text>
          </View>
        )}

        {/* INPUT */}
        <View style={styles.inputBox}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Ask something..."
            style={styles.input}
          />

          <TouchableOpacity onPress={sendMessage} style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  header: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  messageBubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },

  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
  },

  aiBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },

  userText: {
    color: "#fff",
  },

  aiText: {
    color: "#111",
  },

  inputBox: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  input: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

  loadingBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    marginBottom: 5,
  },

  loadingText: {
    marginLeft: 8,
    color: "#555",
  },
});
