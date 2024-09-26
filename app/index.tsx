import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.titleHighlight}>Kakaós</Text> Csiga Recept
        </Text>

        <Image
          source={{
            uri: "https://static.streetkitchen.hu/live/uploads/2024/09/kakaos-csiga-1-scaled.jpg",
          }}
          style={styles.image}
        />

        <Text style={styles.sectionTitle}>Hozzávalók (20 darabhoz):</Text>
        <Text style={styles.text}>
          <Text style={styles.highlight}>A tésztához</Text>
          {"\n"}
          750 g finomliszt + a nyújtáshoz{"\n"}
          90 g kristálycukor{"\n"}
          50 g élesztő{"\n"}
          300 ml 3,5%-os langyos tej{"\n"}2 db tojás{"\n"}
          120 g lágy vaj{"\n"}
          0.5 tk só{"\n"}
          <Text style={styles.highlight}>A töltelékhez</Text>
          {"\n"}
          150 g lágy vaj{"\n"}
          60 g holland kakaópor{"\n"}
          150 g kristálycukor{"\n"}
          <Text style={styles.highlight}>A tetejére</Text>
          {"\n"}2 csomag vaníliás cukor{"\n"}
          200 ml tej{"\n"}2 ek porcukor{"\n"}
          <Text style={styles.highlight}>Extra</Text>
          {"\n"}
          50 g vaj (tepsi kikenéséhez){"\n"}
        </Text>

        <Text style={styles.sectionTitle}>Elkészítés:</Text>
        <Text style={styles.text}>
          A kakaós csiga tésztájához a vaj és a só kivételével minden
          alapanyagot a dagasztógép üstjébe teszünk és közepes fokozaton 10
          percig dagasztjuk. Hozzáadjuk a vajat és a sót is, és további 5 percig
          dagasztjuk, amíg a tészta összeáll. Letakarjuk és langyos helyen kb.
          30 perc alatt a duplájára kelesztjük. {"\n\n"}A tésztát lisztezett
          felületen kb. 0,5 cm-es vastagságúra nyújtjuk, ügyelve arra, hogy
          téglalap formát hozzunk ki belőle. Megkenjük a vajjal, megszórjuk a
          kakaósporcukros keverékkel és szorosan feltekerjük, majd felvágjuk
          2,5-3 cm-es darabokra. Letakarva még 20 percig kelesztjük. {"\n\n"}
          180 fokon előmelegített sütőben alsó-felső sütési fokozaton 25 perc
          alatt készre sütjük, majd vaníliás tejjel meglocsolva visszarakjuk még
          2-3 percre. Végül pihentetjük, majd porcukorral tálaljuk.
        </Text>

        <Text style={styles.sectionTitle}>Időtartamok:</Text>
        <Text style={styles.text}>
          <Text style={styles.highlight}>Elkészítési idő:</Text> 1 óra{"\n"}
          <Text style={styles.highlight}>Kelesztési idő:</Text> 50 perc{"\n"}
          <Text style={styles.highlight}>Sütési idő:</Text> kb. 30 perc{"\n"}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  titleHighlight: {
    color: "brown",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "brown",
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  highlight: {
    color: "#af5643",
    fontWeight: "medium",
  },
});
