// Tabela.js
import React from 'react';
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native';

const Tabela = () => {
    const Proteina1 = [
        { key: '1', alimento: '1 Copo de Leite', macronutrientes: '6g (Proteina)', quantidade: '200ml', calorias: '103kcal' },
        { key: '2', alimento: '2 Fatias de Mussarela', macronutrientes: '11,2g (Proteina)', quantidade: '40g', calorias: '112kcal' },
        { key: '3', alimento: 'Porção de Frango Desfiado', macronutrientes: '31g (Proteina)', quantidade: '100g', calorias: '156kcal' },
        // Adicione mais itens conforme necessário
    ];
    const Carboidrato1 = [
        { key: '1', alimento: '1 Pão Francês', macronutrientes: '30g (Carboidrato)', quantidade: 'Unidade', calorias: '310kcal' },
        { key: '2', alimento: '2 Banana Prata', macronutrientes: '20g (Carboidrato)', quantidade: '2 Unidades', calorias: '168kcal' },
        // Adicione mais itens conforme necessário
    ];
    const Proteina2 = [
        { key: '1', alimento: 'Porção de Ovo Cozido', macronutrientes: '39g (Proteina)', quantidade: '300g', calorias: '465kcal' },
        { key: '2', alimento: '2 Fatias de Mussarela', macronutrientes: '46,5g (Proteina)', quantidade: '150g', calorias: '248kcal' },
        // Adicione mais itens conforme necessário
    ];
    const Carboidrato2 = [
        { key: '1', alimento: 'Porção de Arroz Branco', macronutrientes: '56g (Carboidrato)', quantidade: '200g', calorias: '260kcal' },
        // Adicione mais itens conforme necessário
    ];
    const Proteina3 = [
        { key: '1', alimento: 'Porção de Ovo Cozido', macronutrientes: '26g (Proteina)', quantidade: '200g', calorias: '310kcal' },
        { key: '2', alimento: '1 Copo de Whey', macronutrientes: '30g (Proteina)', quantidade: 'Dose', calorias: '479kcal' },
        // Adicione mais itens conforme necessário
    ];
    const Carboidrato3 = [
        { key: '1', alimento: 'Porção de Batata Doce', macronutrientes: '20g (Carboidrato)', quantidade: '100g', calorias: '86kcal' },
        { key: '2', alimento: '3 Banana Prata', macronutrientes: '30g (Carboidrato)', quantidade: '3 Unidades', calorias: '252kcal' },
        // Adicione mais itens conforme necessário
    ];
    const Proteina4 = [
        { key: '1', alimento: 'Porção de Ovo Cozido', macronutrientes: '26g (Proteina)', quantidade: '200g', calorias: '310kcal' },
        { key: '2', alimento: 'Porção de Filé de Frango', macronutrientes: '31g (Proteina)', quantidade: '100g', calorias: '165kcal' },
        // Adicione mais itens conforme necessário
    ];
    const Carboidrato4 = [
        { key: '1', alimento: 'Porção de Arroz Branco', macronutrientes: '28g (Carboidrato)', quantidade: '100g', calorias: '130kcal' },
        { key: '2', alimento: 'Porção de Batata Doce', macronutrientes: '20g (Carboidrato)', quantidade: '100g', calorias: '86kcal' },
        // Adicione mais itens conforme necessário
    ];

    return (
        <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', height: '70%', alignItems: 'center', justifyContent: 'center', gap: 100, padding: 20, marginLeft: 30, }}>
            <View style={styles.Div}>
                <Text style={styles.TitleT}>Café Da Manhã</Text>

                <Text style={styles.Title}>Proteinas</Text>
                <FlatList
                    style={styles.List}
                    data={Proteina1}
                    renderItem={({ item }) => (
                        <View style={styles.TableDiv}>
                            <View style={styles.Table}>
                                <Text style={styles.Text}>{item.alimento} | </Text>
                                <Text style={styles.Text}>{item.macronutrientes} | </Text>
                                <Text style={styles.Text}>{item.quantidade} | </Text>
                                <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                            </View>
                        </View>
                    )}
                />
                <Text style={styles.Title}>Carboidratos</Text>
                <FlatList
                    style={styles.List}
                    data={Carboidrato1}
                    renderItem={({ item }) => (
                        <View style={styles.Table}>
                            <Text style={styles.Text}>{item.alimento} | </Text>
                            <Text style={styles.Text}>{item.macronutrientes} | </Text>
                            <Text style={styles.Text}>{item.quantidade} | </Text>
                            <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.Div}>
                <Text style={styles.TitleT}>Almoço</Text>

                <Text style={styles.Title}>Proteinas</Text>
                <FlatList
                    style={styles.List}
                    data={Proteina2}
                    renderItem={({ item }) => (
                        <View style={styles.TableDiv}>
                            <View style={styles.Table}>
                                <Text style={styles.Text}>{item.alimento} | </Text>
                                <Text style={styles.Text}>{item.macronutrientes} | </Text>
                                <Text style={styles.Text}>{item.quantidade} | </Text>
                                <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                            </View>
                        </View>
                    )}
                />
                <Text style={styles.Title}>Carboidratos</Text>
                <FlatList
                    style={styles.List}
                    data={Carboidrato2}
                    renderItem={({ item }) => (
                        <View style={styles.Table}>
                            <Text style={styles.Text}>{item.alimento} | </Text>
                            <Text style={styles.Text}>{item.macronutrientes} | </Text>
                            <Text style={styles.Text}>{item.quantidade} | </Text>
                            <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.Div}>
                <Text style={styles.TitleT}>Café da Tarde</Text>

                <Text style={styles.Title}>Proteinas</Text>
                <FlatList
                    style={styles.List}
                    data={Proteina3}
                    renderItem={({ item }) => (
                        <View style={styles.TableDiv}>
                            <View style={styles.Table}>
                                <Text style={styles.Text}>{item.alimento} | </Text>
                                <Text style={styles.Text}>{item.macronutrientes} | </Text>
                                <Text style={styles.Text}>{item.quantidade} | </Text>
                                <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                            </View>
                        </View>
                    )}
                />
                <Text style={styles.Title}>Carboidratos</Text>
                <FlatList
                    style={styles.List}
                    data={Carboidrato3}
                    renderItem={({ item }) => (
                        <View style={styles.Table}>
                            <Text style={styles.Text}>{item.alimento} | </Text>
                            <Text style={styles.Text}>{item.macronutrientes} | </Text>
                            <Text style={styles.Text}>{item.quantidade} | </Text>
                            <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.Div}>
                <Text style={styles.TitleT}>Janta</Text>

                <Text style={styles.Title}>Proteinas</Text>
                <FlatList
                    style={styles.List}
                    data={Proteina4}
                    renderItem={({ item }) => (
                        <View style={styles.TableDiv}>
                            <View style={styles.Table}>
                                <Text style={styles.Text}>{item.alimento} | </Text>
                                <Text style={styles.Text}>{item.macronutrientes} | </Text>
                                <Text style={styles.Text}>{item.quantidade} | </Text>
                                <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                            </View>
                        </View>
                    )}
                />
                <Text style={styles.Title}>Carboidratos</Text>
                <FlatList
                    style={styles.List}
                    data={Carboidrato4}
                    renderItem={({ item }) => (
                        <View style={styles.Table}>
                            <Text style={styles.Text}>{item.alimento} | </Text>
                            <Text style={styles.Text}>{item.macronutrientes} | </Text>
                            <Text style={styles.Text}>{item.quantidade} | </Text>
                            <Text style={styles.Text}>{item.calorias}{'\n'}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Div: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        height: '100%',
        justifyContent: 'center',
        paddingTop: 100,
        marginRight: 70,
    },
    List: {
        height: '100%',
    },
    Table: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,

    },
    Text: {
        color: '#fff',
        fontSize: 18,
    },
    Title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
    },
    TitleT: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 50,
        marginBottom: 20
    },
});

export default Tabela;
