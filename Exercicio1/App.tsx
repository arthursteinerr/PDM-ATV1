//Arthur Steiner Morais Silva

import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [usuario, setUsuario] = useState("");

  return (
    <View style={styles.hub}>
      <View style={styles.title}>
        <Text>Digite seu nome de usuário!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui seu nome de usuário"
          value={usuario}
          onChangeText={setUsuario}
        />
      </View>

      <Button
        title="Confirmar"
        onPress={() => alert(`Nome de usuário enviado! ${usuario}`)}
      />
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

  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
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
});
