//Arthur Steiner Morais Silva

import {  StyleSheet, TextInput, Text, View, Button, ScrollView} from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState<string[]>([]);

  return (
    <View style={styles.hub}>
      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={texto}
        onChangeText={setTexto}
      />
      <Button
        title="Adicionar Item"
        onPress={() => setItens([...itens, texto])}
      ></Button>
      <Text>Itens adicionados:</Text>
      <ScrollView>
        {itens.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  hub: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },

  form: {
    gap: 8,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
  },
  Button: {
    marginTop: 10,
  },
});
