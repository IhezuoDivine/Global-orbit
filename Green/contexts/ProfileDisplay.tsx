import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../app/Home";
import Profile from "../app/Profile/Profilescreen";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function ProfileDisplay() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
