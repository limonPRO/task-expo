// CategoriesScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../redux/store";

const CategoriesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if(!newCategory){
      console.log('please enter input')
    }
    else{
      dispatch(addCategory(newCategory));
      setNewCategory("");
    }
    
  };

  return (
    <View   style={{
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
        <Text style={{ color: "white", fontSize: 17 }}>Expense Categories</Text>
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
        placeholder="Enter a new category"
        value={newCategory}
        onChangeText={(text) => setNewCategory(text)}
      />
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
          handleAddCategory
          // () => navigation.navigate("Home")
        }
      >
        <Text style={{ color: "white", fontSize: 17 }}>
          add catagory{" "}
          {/* {signUpMutation.isLoading ? 'Please wait...' : 'Create my account'} */}
        </Text>
      </TouchableOpacity>
      <View style={{
            
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 10,
            alignSelf: "center",
            marginBottom: 40,
          }}>
        {categories.map((category, index) => (
            <View>
<Text style={{ color: "white", fontSize: 17 }} key={index}>{category}
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
          () => navigation.navigate("logsScreen")
        }
      >
        <Text style={{ color: "white", fontSize: 17 }}>
          add expense
          {/* {signUpMutation.isLoading ? 'Please wait...' : 'Create my account'} */}
        </Text>
      </TouchableOpacity>
          </Text>
            </View>
          
         
        ))}
      </View>
    </View>
  );
};

export default CategoriesScreen;
