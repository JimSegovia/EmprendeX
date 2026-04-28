import { Text } from 'react-native';
import Animated, { screenEntering } from '@/components/ui/motion';

export default function RegisterScreen() {
  return (
    <Animated.View className="flex-1 items-center justify-center bg-white" entering={screenEntering}>
      <Text className="text-xl">Pantalla de Registro</Text>
    </Animated.View>
  );
}
