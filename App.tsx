import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

const tarefasIniciais = [
  { nome: "Prova Bona" },
  { nome: "Trabalho Eio" },
  { nome: "Instalar mod Zomboid" }
];

export default function App() {

  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { nome: novaTarefa.trim() }]);
      setNovaTarefa('');
    }
  }

  const removerTarefa = (indexRemover) => {
    const novaLista = tarefas.filter((_, index) => index !== indexRemover);
    setTarefas(novaLista);
  }

  return (
    <View style={styles.container}>

      {
        tarefas.map((item, index) => (
          <View key={index} style={styles.elementos}>

            <Text style={styles.itens}>
              {item.nome}
            </Text>

            <Pressable
              style={styles.botaoRemover}
              onPress={() => removerTarefa(index)}
            >
              <Text style={styles.textoRemover}>🗑</Text>
            </Pressable>

          </View>
        ))
      }

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder='Digite uma nova tarefa'
          placeholderTextColor='#fff'
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        <Pressable style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.textoBotao}>ADICIONAR</Text>
        </Pressable>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  elementos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c81ecb',
    borderRadius: 16,
    marginTop: 8,
    padding: 10,
    width: 250,
  },

  itens: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  botaoRemover: {
    marginLeft: 10,
    backgroundColor: '#7f1d1d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  textoRemover: {
    color: '#fff',
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },

  input: {
    flex: 1,
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#c81ecb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

});