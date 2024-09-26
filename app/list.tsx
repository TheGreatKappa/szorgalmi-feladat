import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListScreen() {
  const players = [
    "LeBron James",
    "Stephen Curry",
    "Kevin Durant",
    "Giannis Antetokounmpo",
    "James Harden",
    "Luka Dončić",
    "Kawhi Leonard",
    "Anthony Davis",
  ];

  return (
    <View style={styles.container}>
      {players.map((player, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.text}>{player}</Text>
          <View style={styles.divider} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  listItem: {
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    marginTop: 8,
  },
});
