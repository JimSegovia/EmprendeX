import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft, Calendar, ChevronDown } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { AnimatedTouchableOpacity, screenEntering, sectionEntering, smoothLayout } from '@/components/ui/motion';

const tabs = ['Pedido', 'Cotización', 'Alquiler', 'Suscripción'];

export default function NuevaOperacionScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Pedido');
  const insets = useSafeAreaInsets();

  return (
    <Animated.View className="flex-1 bg-white" entering={screenEntering}>
      {/* Header */}
      <Animated.View 
        className="bg-violet-600 px-4 pb-4 flex-row items-center"
        style={{ paddingTop: Math.max(insets.top, 16) + 16 }}
        entering={sectionEntering(0)}
      >
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Nueva operación</Text>
      </Animated.View>

      {/* Tabs */}
      <Animated.View className="border-b border-slate-200" entering={sectionEntering(1)}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
          {tabs.map((tab) => (
            <AnimatedTouchableOpacity 
              key={tab} 
              onPress={() => setActiveTab(tab)}
              className={`py-4 mr-6 border-b-2 ${activeTab === tab ? 'border-violet-600' : 'border-transparent'}`}
              layout={smoothLayout}
            >
              <Text className={`${activeTab === tab ? 'text-violet-600 font-semibold' : 'text-slate-500'}`}>
                {tab}
              </Text>
            </AnimatedTouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>

      <Animated.ScrollView
        className="flex-1 p-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
        entering={sectionEntering(2)}
      >
        {/* Cliente */}
        <Animated.View className="mb-6" entering={sectionEntering(3)}>
          <Text className="font-bold text-slate-800 mb-2">Cliente</Text>
          <TouchableOpacity className="flex-row items-center justify-between border border-slate-200 rounded-xl p-4 bg-white">
            <Text className="text-slate-400">Seleccionar cliente</Text>
            <ChevronDown color="#94a3b8" size={20} />
          </TouchableOpacity>
          <TouchableOpacity className="items-end mt-2">
            <Text className="text-violet-600 font-medium">+ Nuevo cliente</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Productos / Servicios */}
        <Animated.View className="mb-6" entering={sectionEntering(4)}>
          <Text className="font-bold text-slate-800 mb-2">Productos / Servicios</Text>
          <TouchableOpacity className="flex-row items-center justify-between border border-slate-200 rounded-xl p-4 bg-white">
            <Text className="text-slate-400">Seleccionar producto</Text>
            <ChevronDown color="#94a3b8" size={20} />
          </TouchableOpacity>
          <TouchableOpacity className="items-end mt-2">
            <Text className="text-violet-600 font-medium">+ Agregar producto</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Fecha de entrega */}
        <Animated.View className="mb-6" entering={sectionEntering(5)}>
          <Text className="font-bold text-slate-800 mb-2">Fecha de entrega</Text>
          <TouchableOpacity className="flex-row items-center justify-between border border-slate-200 rounded-xl p-4 bg-white">
            <Text className="text-slate-800">20/05/2024</Text>
            <Calendar color="#94a3b8" size={20} />
          </TouchableOpacity>
        </Animated.View>

        {/* Método de entrega */}
        <Animated.View className="mb-8" entering={sectionEntering(6)}>
          <Text className="font-bold text-slate-800 mb-2">Método de entrega</Text>
          <TouchableOpacity className="flex-row items-center justify-between border border-slate-200 rounded-xl p-4 bg-white">
            <Text className="text-slate-400">Seleccionar método</Text>
            <ChevronDown color="#94a3b8" size={20} />
          </TouchableOpacity>
        </Animated.View>
      </Animated.ScrollView>

      {/* Footer */}
      <Animated.View
        className="border-t border-slate-100 bg-white px-4 pt-4 flex-row items-center justify-between"
        style={{ paddingBottom: Math.max(insets.bottom, 16) }}
        entering={sectionEntering(7)}
      >
        <View>
          <Text className="text-slate-500 font-medium">Total</Text>
          <Text className="text-lg font-bold text-slate-800">S/ 0.00</Text>
        </View>
        <TouchableOpacity 
          className="bg-violet-600 px-8 py-3 rounded-xl"
          onPress={() => router.back()}
        >
          <Text className="text-white font-bold">Guardar</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}
