
import MyButton from '@/shared/components/buttons/MyButton';
import { ThemedText } from '@/shared/components/ThemedText';
import { ThemedView } from '@/shared/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText type="title">Bienvenido a YoElijo</ThemedText>
      <MyButton title="Ir a Explore" onPress={() => router.push("/(tabs)/explore")} />
    </ThemedView> 
  );
}

