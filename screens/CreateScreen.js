import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      isEditable={false}
      onsubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
}

const styles = StyleSheet.create({});
