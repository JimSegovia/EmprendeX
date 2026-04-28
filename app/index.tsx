import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import Animated, { screenEntering, sectionEntering } from '@/components/ui/motion';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace('/onboarding');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }} 
          className="bg-white"
          showsVerticalScrollIndicator={false}
        >
          <Animated.View className="flex-1 px-8 py-10 justify-between" entering={screenEntering}>
            
            {/* Header / Logo */}
            <Animated.View className="items-center mt-4" entering={sectionEntering(0)}>
              <View className="flex-row items-center justify-center">
                <Text className="text-3xl font-bold text-slate-800 tracking-tight">Emprende</Text>
                <Text className="text-4xl font-extrabold text-violet-600 italic ml-1">X</Text>
              </View>
              <Text className="text-slate-500 text-base font-medium mt-1">
                Tu negocio, en orden.
              </Text>
            </Animated.View>

            {/* Illustration */}
            <Animated.View className="items-center justify-center my-6" entering={sectionEntering(1)}>
              <Image
                source={require('../assets/images/emprendex-login.png')}
                style={{ width: '100%', aspectRatio: 1.5 }}
                contentFit="contain"
                contentPosition="center"
              />
            </Animated.View>

            {/* Form Section */}
            <Animated.View className="w-full" entering={sectionEntering(2)}>
              <View className="mb-5">
                <Text className="text-slate-700 font-semibold mb-2">Correo electrónico</Text>
                <TextInput
                  className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-base text-slate-800"
                  placeholder="ejemplo@correo.com"
                  placeholderTextColor="#94a3b8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View className="mb-2">
                <Text className="text-slate-700 font-semibold mb-2">Contraseña</Text>
                <View className="relative justify-center">
                  <TextInput
                    className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 pr-12 text-base text-slate-800"
                    placeholder="••••••••"
                    placeholderTextColor="#94a3b8"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity 
                    className="absolute right-4"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={20} color="#94a3b8" />
                    ) : (
                      <Eye size={20} color="#94a3b8" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View className="items-end mb-8">
                <TouchableOpacity>
                  <Text className="text-violet-600 font-medium text-sm">
                    ¿Olvidaste tu contraseña?
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                className="bg-violet-600 rounded-xl py-4 items-center justify-center shadow-sm shadow-violet-200 active:bg-violet-700 mb-6"
                onPress={handleLogin}
              >
                <Text className="text-white font-bold text-lg">
                  Iniciar sesión
                </Text>
              </TouchableOpacity>

              <View className="flex-row justify-center items-center mb-4">
                <Text className="text-slate-500 font-medium mr-1">
                  ¿No tienes cuenta?
                </Text>
                <Link href="/register" asChild>
                  <TouchableOpacity>
                    <Text className="text-violet-600 font-bold">Regístrate</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </Animated.View>
            
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

