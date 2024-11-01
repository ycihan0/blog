import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function BlogPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text>Başlığı Giriniz:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} />
      <Text>İçeriği Giriniz:</Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} />
      <TouchableOpacity>
        <Text>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
