import { View, StyleSheet, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View style={stylesLoading.container}>
        <ActivityIndicator color='#7C3AED'/>
    </View>
  )
}

const stylesLoading = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});