import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { ProdutoEstoque } from "../../../interfaces/ProdutoEstoque";
import { styles } from "./style";

const produtos: ProdutoEstoque[] = [
  { descricao: "Parafuso sextavado", quantidadeEstoque: 48 },
  { descricao: "Chave de fenda", quantidadeEstoque: 15 },
  { descricao: "Luva de proteção", quantidadeEstoque: 32 },
  { descricao: "Óculos de segurança", quantidadeEstoque: 19 },
];

export default function EstoqueView() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.badge}>SENAI</Text>
          <Text style={styles.title}>Controle de Estoque</Text>
          <Text style={styles.subtitle}>Tela estática para o seletivo de professor</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Adicionar produto</Text>

          <Text style={styles.label}>Nome do produto</Text>
          <TextInput
            placeholder="Ex: Martelo"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />

          <Text style={styles.label}>Quantidade em estoque</Text>
          <TextInput
            placeholder="Ex: 10"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
            <Text style={styles.primaryButtonText}>Adicionar produto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Produtos cadastrados</Text>

          {produtos.map((produto, index) => (
            <View key={`${produto.descricao}-${index}`} style={styles.item}>
              <View>
                <Text style={styles.itemTitle}>{produto.descricao}</Text>
                <Text style={styles.itemQuantity}>Estoque: {produto.quantidadeEstoque}</Text>
              </View>

              <View style={styles.itemActions}>
                <TouchableOpacity style={styles.editButton} activeOpacity={0.9}>
                  <Text style={styles.editButtonText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.removeButton} activeOpacity={0.9}>
                  <Text style={styles.removeButtonText}>Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
