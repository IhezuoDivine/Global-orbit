import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  rating: string;
};

type Props = {
  profileImage: string;
  name: string;
  handle: string;
  bio: string;
  followers: number;
  following: number;
  products: Product[];
};

const SCREEN_WIDTH = Dimensions.get("window").width;
const NUM_COLUMNS = 3;

const ProductProfile: React.FC<Props> = ({
  profileImage,
  name,
  handle,
  bio,
  followers,
  following,
  products,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const renderHeader = () => (
    <View style={styles.profileContainer}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.handle}>@{handle}</Text>

      <Text style={styles.bio}>{bio}</Text>

      <View style={styles.stats}>
        <Text style={styles.stat}>{followers} Followers</Text>
        <Text style={styles.stat}>{following} Following</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      numColumns={NUM_COLUMNS}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.productItem}>
          <Image source={{ uri: item.image }} style={styles.productImage} />

          <Text style={styles.productName} numberOfLines={1}>
            {item.name}
          </Text>

          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productRating}>{item.rating}</Text>
        </View>
      )}
    />
  );
};

export default ProductProfile;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      paddingBottom: 20,
      backgroundColor: theme.background,
    },

    profileContainer: {
      alignItems: "center",
      paddingVertical: 20,
      borderBottomWidth: 0.5,
      borderColor: "#ccc",
      backgroundColor: theme.background,
    },

    profileImage: {
      width: 90,
      height: 90,
      borderRadius: 45,
      marginBottom: 10,
    },

    name: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    handle: {
      fontSize: 14,
      color: "#777",
      marginBottom: 5,
    },

    bio: {
      fontSize: 14,
      color: "#444",
      textAlign: "center",
      marginHorizontal: 20,
      marginBottom: 10,
    },

    stats: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "60%",
    },

    stat: {
      fontSize: 14,
      fontWeight: "500",
      color: theme.text,
    },

    productItem: {
      flex: 1,
      margin: 2,
      alignItems: "center",
      width: SCREEN_WIDTH / NUM_COLUMNS - 4,
      paddingBottom: 10,
    },

    productImage: {
      width: "100%",
      aspectRatio: 1,
      borderRadius: 8,
      marginBottom: 5,
    },

    productName: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.text,
    },

    productPrice: {
      fontSize: 11,
      color: "green",
    },

    productRating: {
      fontSize: 11,
      color: "orange",
    },
  });
