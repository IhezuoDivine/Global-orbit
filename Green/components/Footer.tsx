import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Platform,
  Image,
} from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Home, Search, Bell, User } from "lucide-react-native";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.bottomNav}>
      <View style={styles.navItems}>
        <Pressable
          style={styles.navItem}
          onPress={() => {
            if (pathname !== "/" && pathname !== "/Home") {
              try {
                router.push("/");
              } catch (err) {
                Alert.alert("Navigation Error", "Could not navigate");
              }
            }
          }}
          disabled={pathname === "/" || pathname === "/Home"}
          hitSlop={10}
        >
          <Home
            size={24}
            color={
              pathname.startsWith("/Home")
                ? styles.activeText.color
                : styles.inactiveText.color
            }
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

        {/* SEARCH */}
        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/Search/search")}
          hitSlop={10}
        >
          <Search
            size={24}
            color={
              pathname.startsWith("/Search/search")
                ? styles.activeText.color
                : styles.inactiveText.color
            }
            strokeWidth={3}
          />
          <Text
            style={
              pathname === "/Search/search"
                ? styles.activeText
                : styles.inactiveText
            }
          >
            Search
          </Text>
        </Pressable>

        <Pressable
          style={styles.centerNavItem}
          onPress={() => {
            try {
              if (pathname === "/AI/Aipage") router.push("/Home");
              else router.push("/AI/Aipage");
            } catch (err) {
              Alert.alert("Navigation Error", "Could not navigate");
            }
          }}
        >
          <View style={styles.centerButtonWrapper}>
            <View
              style={[
                styles.centerButton,
                pathname === "/AI/Aipage" && styles.centerButtonActive,
              ]}
            >
              <Image
                source={require("../assets/G.O_logo-removebg-preview.png")}
                style={styles.centerLogo}
              />
            </View>
          </View>
        </Pressable>

        {/* NOTIFICATION */}
        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/Notification/Notification-list")}
          hitSlop={10}
        >
          <Bell
            size={24}
            color={
              pathname.startsWith("/Notification/Notification-list")
                ? styles.activeText.color
                : styles.inactiveText.color
            }
            strokeWidth={3}
          />
          <Text
            style={
              pathname === "/Notification/Notification-list"
                ? styles.activeText
                : styles.inactiveText
            }
          >
            Notification
          </Text>
        </Pressable>

        {/* PROFILE */}
        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/Profile/Profilescreen")}
          hitSlop={10}
        >
          <View style={styles.footerIcon}>
            <User
              size={24}
              color={
                pathname.startsWith("/Profile")
                  ? styles.activeText.color
                  : styles.inactiveText.color
              }
              strokeWidth={3}
            />
          </View>
          <Text
            style={
              pathname.startsWith("/Profile")
                ? styles.activeText
                : styles.inactiveText
            }
          >
            Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    bottomNav: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.background,
      paddingTop: 20,
      paddingBottom: Platform.OS === "ios" ? 35 : 20,
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
    },
    centerButtonWrapper: {
      position: "absolute",
      top: -35,
      padding: 6,
      borderRadius: 40,
      backgroundColor: theme.text,
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
      backgroundColor: theme.background,
      justifyContent: "center",
      alignItems: "center",
    },
    centerLogo: {
      width: 38,
      height: 38,
      tintColor: theme.text,
    },
    centerButtonActive: {
      backgroundColor: theme.hover,
    },
    footerIcon: {
      marginBottom: 6,
    },
    activeText: {
      color: theme.hover,
      fontSize: 12,
    },
    inactiveText: {
      color: theme.text,
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
