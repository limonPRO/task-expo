import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const logs = useSelector((state) => state.logs);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const loadExpenseData = async () => {
      try {
        const data = await AsyncStorage.getItem('expenseData');
        if (data) {
          const logs = JSON.parse(data);
          store.dispatch(logsSlice.actions.addLog(logs));
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadExpenseData();
  }, []);

  useEffect(() => {
    const total = logs.reduce((total, log) => total + log.amount, 0);
    setTotalExpenses(total);
  }, [logs]);

  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>total expense ${totalExpenses.toFixed(2)}</Text>
      <TouchableOpacity
        style={{ 
          width:'50%',
          height: 50,
          backgroundColor: "#008080",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderRadius: 5,
          marginTop: 10,
          alignSelf: "center",
          marginBottom: 40
      }}
        onPress={() => navigation.navigate('catagoriesScreen')}
      >
        <Text style={{ color: 'white', alignSelf: 'center' }}>add category</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{  width:'50%',
        height: 50,
        backgroundColor: "#008080",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        borderRadius: 5,
        marginTop: 10,
        alignSelf: "center",
        marginBottom: 40}}
        onPress={() => navigation.navigate('logsScreen')}
      >
        <Text style={{ color: 'white', alignSelf: 'center' }}>add expense</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01020B",
      height: "100%",
      justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
  },
});
