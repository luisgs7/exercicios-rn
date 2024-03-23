import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Index'


export default function App() {
  return (
    <Index />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
