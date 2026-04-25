import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const biodata = {
    nama: "Anton Sukamto",
    nim: "20200101",
    alamat: "bogor",
    email: "anton@gmail.com",
    nomor_telepon: "089651424950",
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/avatar/profil.jpg")}
        style={styles.headers.img}
      />

      <Text style={styles.headers.title}>{biodata.nama}</Text>
      <Text style={styles.headers.subtitle}>{biodata.nim}</Text>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Phone</Text>
          <TextInput
            value={biodata.nomor_telepon}
            style={styles.identity.input_text}
          />
        </View>
      </View>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Email</Text>
          <TextInput value={biodata.email} style={styles.identity.input_text} />
        </View>
      </View>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Alamat</Text>
          <TextInput
            value={biodata.alamat}
            style={styles.identity.input_text}
          />
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <TouchableOpacity style={styles.identity.button}>
          <Text style={styles.identity.button_text}>save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  headers: {
    title: {
      fontWeight: "bold",
      fontSize: 40,
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "red",
    },
    img: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderColor: "black",
      borderWidth: 4,
      padding: 2,
      backgroundColor: "#f2f2f2",
    },
  },

  identity: {
    container: {
      alignSelf: "stretch",
      padding: 10,
      marginTop: 20,
    },
    card_input: {
      borderWidth: 1,
      borderColor: "#9b9d9f",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    title: {
      color: "#9b9d9f",
      fontSize: 16,
    },
    input_text: {
      color: "#000",
      fontSize: 16,
    },
  },
});
