import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Platform,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Home, Search, PlusCircle, Bell, User } from "lucide-react-native";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.bottomNav}>
      <View style={styles.navItems}>
        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/Home")}
          hitSlop={10}
        >
          <Home
            size={24}
            color={pathname === "/Home" ? "#c1ccc6" : "#fff"}
            strokeWidth={3}
          />
          <Text
            style={
              pathname === "/Home" ? styles.activeText : styles.inactiveText
            }
          >
            Home
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/test")}
          hitSlop={10}
        >
          <Search
            size={24}
            color={pathname === "/test" ? "#c1ccc6" : "#fff"}
            strokeWidth={3}
          />
          <Text
            style={
              pathname === "/search/" ? styles.activeText : styles.inactiveText
            }
          >
            Search
          </Text>
        </Pressable>

        <Pressable
          style={styles.centerNavItem}
          onPress={() => {
            try {
              if (pathname === "/Post") router.push("/Home");
              else router.push("/Post");
            } catch (err) {
              Alert.alert("Navigation Error", "Could not navigate");
            }
          }}
        >
          <View style={styles.centerButtonWrapper}>
            <View
              style={[
                styles.centerButton,
                pathname === "/Post" && styles.centerButtonActive,
              ]}
            >
              <Image
                source={require("../assets/G.O_logo-removebg-preview.png")}
                style={styles.centerLogo}
              />
            </View>
          </View>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/Notification")}
          hitSlop={10}
        >
          <Bell
            size={24}
            color={pathname === "/Notification" ? "#c1ccc6" : "#fff"}
            strokeWidth={3}
          />
          <Text
            style={
              pathname === "/Notification"
                ? styles.activeText
                : styles.inactiveText
            }
          >
            Notification
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/Profile")}
          hitSlop={10}
        >
          <View style={styles.footerIcon}>
            <User
              size={24}
              color={pathname === "/Profile" ? "#c1ccc6" : "#fff"}
              strokeWidth={3}
            />
          </View>
          <Text
            style={
              pathname === "/Profile" ? styles.activeText : styles.inactiveText
            }
          >
            Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    paddingTop: 20,
    paddingBottom: Platform.OS === "ios" ? 15 : 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 20,
  },
  navItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  centerNavItem: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    top: -15,
  },
  centerButtonWrapper: {
    position: "absolute",
    top: -40,
    padding: 6,
    borderRadius: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 20,
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#858484",
    justifyContent: "center",
    alignItems: "center",
  },
  centerLogo: {
    width: 38,
    height: 38,
    tintColor: "#000",
  },
  centerButtonActive: {
    backgroundColor: "#c1ccc6",
  },
  footerIcon: {
    marginBottom: 6,
  },
  activeText: {
    color: "#c1ccc6",
    fontSize: 12,
  },
  inactiveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  centerLabel: {
    paddingTop: 10,
    marginTop: 20,
    fontWeight: "600",
    fontSize: 12,
  },
});

export default Footer;
