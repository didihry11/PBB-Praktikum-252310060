import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles as globalStyles } from "../styles/StyleApps";

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: "#0ea6d0",
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

const CTABook = ({ book }) => {
  return (
    <View style={[globalStyles.new_com_container, globalStyles.shadow]}>
      <View style={{ flexDirection: "row" }}>
        <CTAImage book={book} />
        <View
          style={{
            marginLeft: 15,
            flex: 1,
            flexShrink: 1,
            justifyContent: "space-between",
          }}
        >
          <CTAInfoBook book={book} />
          <ButtonRead />
        </View>
      </View>
    </View>
  );
};

const CTAImage = ({ book }) => {
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={book.img}
        style={[globalStyles.new_book_img, globalStyles.shadow]}
        resizeMode="cover"
      />
      {!book.is_free && (
        <View style={[globalStyles.circle_premium, globalStyles.shadow]}>
          <AntDesign name="crown" size={18} color="black" />
        </View>
      )}
    </View>
  );
};

const CTAInfoBook = ({ book }) => {
  return (
    <View>
      <Text style={globalStyles.new_book_title}>{book.title}</Text>
      <Text style={globalStyles.new_book_text}>by {book.author}</Text>
      <View style={{ marginTop: 10 }}>
        <Text
          style={globalStyles.new_book_text}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {book.sinopsis}
        </Text>
      </View>
    </View>
  );
};

const ButtonRead = () => {
  return (
    <TouchableOpacity style={[globalStyles.btn_read, globalStyles.shadow]}>
      <Text style={globalStyles.btn_read_text}>Read Now</Text>
    </TouchableOpacity>
  );
};

export default CTABook;
