// LogsScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, Picker, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addLog, setCategoryFilter } from '../redux/store';

const LogsScreen = () => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs);
  const categories = useSelector((state) => state.categories);
  const filters = useSelector((state) => state.filters);
  const [newLog, setNewLog] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddLog = async() => {
    const log = {
      id: logs.length + 1,
      category: selectedCategory,
      amount: parseFloat(newLog),
    };
    dispatch(addLog(log));
    setNewLog('');
    setSelectedCategory('');
  };

  const handleFilterByCategory = (category) => {
    dispatch(setCategoryFilter(category));
  };

  const clearFilters = () => {
    dispatch(setCategoryFilter(null));
  };

  const filteredLogs = filters.category
    ? logs.filter((log) => log.category === filters.category)
    : logs;

  return (
    <View style={{
      backgroundColor: "#01020B",
      height: "100%",
    }}>
       <View style={{
            
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 10,
            alignSelf: "center",
            marginBottom: 40,
          }}>
      <Text style={{ color: "white", fontSize: 17 }}>Expense</Text>
      </View>
      <TextInput
      keyboardAppearance="dark"
      style={{
        height: 50,
        marginBottom: 16,
        marginHorizontal: 20,
        fontSize: 17,
        textAlignVertical: "center",
        paddingTop: 20,
        backgroundColor: "rgba(94, 94, 102, 0.24)",
        padding: 14,
        borderRadius: 11,
        color: "white",
      }}
      placeholderTextColor="rgba(235, 235, 245, 0.6)"
        placeholder="Enter an expense amount"
        value={newLog}
        onChangeText={(text) => setNewLog(text)}
        keyboardType="numeric"
      />
      <Picker style={{justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 10,
            alignSelf: "center",
            marginBottom: 40,}}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Select a category" value="" />
        {categories.map((category, index) => (
          <Picker.Item key={index} label={category} value={category} />
        ))}
      </Picker>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          backgroundColor: "#008080",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderRadius: 5,
          marginTop: 10,
          alignSelf: "center",
          marginBottom: 40,
        }}
        onPress={
          handleAddLog
          // () => navigation.navigate("Home")
        }
      >
        <Text style={{ color: "white", fontSize: 17 }}>
          add expense
          {/* {signUpMutation.isLoading ? 'Please wait...' : 'Create my account'} */}
        </Text>
      </TouchableOpacity>
      <View>
        <Text>Filter by Category:</Text>
        <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          backgroundColor: "#008080",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderRadius: 5,
          marginTop: 10,
          alignSelf: "center",
          marginBottom: 40,
        }}
        onPress={
          clearFilters
          // () => navigation.navigate("Home")
        }
      >
        <Text style={{ color: "white", fontSize: 17 }}>
          clear filter
          {/* {signUpMutation.isLoading ? 'Please wait...' : 'Create my account'} */}
        </Text>
      </TouchableOpacity>
        {/* {categories.map((category, index) => (
          <Button
            key={index}
            title={category}
            onPress={() => handleFilterByCategory(category)}
          />
        ))} */}
      </View>
      <FlatList
        data={filteredLogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={{color:'white'}}>Category: {item.category}</Text>
            <Text style={{color:'white'}}>Amount: ${item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LogsScreen;
