import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";

const TelaDeCadastro = ({ navigation }) => {
  const [usuario, setUsuario] = useState({
    CPF: "",
    Nome: "",
    Email: "",
    Telefone: "",
    Senha: "",
    Logradouro: {
      CEP: "",
      NomeLog: "",
      Numero: "",
    },
  });

  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleInputChange = (text, field) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,

      [field]: text,
    }));
  };

  const handleLogradouroInputChange = (text, field) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,

      Logradouro: {
        ...prevUsuario.Logradouro,

        [field]: text,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      if (
        !usuario.Nome ||
        !usuario.CPF ||
        !usuario.Email ||
        !usuario.Telefone ||
        !usuario.Senha ||
        !usuario.Logradouro.CEP ||
        !usuario.Logradouro.NomeLog ||
        !usuario.Logradouro.Numero
      ) {
        Alert.alert("Preencha todos os campos");

        return;
      }

      const response = await axios.post(
        "https://localhost:44302/api/Usuario/cadastrarUsuario",
        usuario
      );

      console.log("Cadastro bem-sucedido:", response.data);

      setCadastroSucesso(true);
    } catch (error) {
      console.error("Erro no cadastro:", error);

      Alert.alert("Erro", "Ocorreu um erro durante o cadastro");
    }
  };

  const handleOK = () => {
    setCadastroSucesso(false);

    navigation.navigate("TelaDeLogin");
  };

  return (
    <View Style={styles.container} >
      <View style={styles.cadastroForm}>
        <Text style={styles.cadastroTitle}>Faça seu Cadastro!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={usuario.Nome}
          onChangeText={(text) => handleInputChange(text, "Nome")}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={usuario.CPF}
          onChangeText={(text) => handleInputChange(text, "CPF")}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={usuario.Email}
          onChangeText={(text) => handleInputChange(text, "Email")}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={usuario.Telefone}
          onChangeText={(text) => handleInputChange(text, "Telefone")}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={usuario.Senha}
          onChangeText={(text) => handleInputChange(text, "Senha")}
        />

        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={usuario.Logradouro.CEP}
          onChangeText={(text) => handleLogradouroInputChange(text, "CEP")}
        />

        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={usuario.Logradouro.NomeLog}
          onChangeText={(text) => handleLogradouroInputChange(text, "NomeLog")}
        />

        <TextInput
          style={styles.input}
          placeholder="Número"
          value={usuario.Logradouro.Numero}
          onChangeText={(text) => handleLogradouroInputChange(text, "Numero")}
        />

        <TouchableOpacity style={styles.cadastrarButton} onPress={handleSubmit}>
          <Text style={styles.textCadastrar}>CADASTRAR</Text>
        </TouchableOpacity>

        <Text
          style={styles.link}
          onPress={() => navigation.navigate("TelaDeLogin")}
        >
          Ja sou cadastrado!
        </Text>
        <Footer style={styles.footer}/>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={cadastroSucesso}
        onRequestClose={() => {
          setCadastroSucesso(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Cadastro realizado com sucesso!
            </Text>

            <TouchableOpacity style={styles.okButton} onPress={handleOK}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
  },
  cadastroForm: {
    flex: 2,
    alignItems: "center",
  },
  cadastroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: 330,
    height: 50,
    borderColor: "gray",
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  cadastrarButton: {
    backgroundColor: "#F9C200",
    borderRadius: 10,
    width: 300,
    height: 70,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 10,
    marginBottom: 30,
  },
  textCadastrar: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: "#F9C200",
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  okButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    fontSize: 20,
    marginBottom: 33,

  },

});
export default TelaDeCadastro;
