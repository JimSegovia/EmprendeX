import { Tabs, useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Home, FileText, Plus, Users, Menu } from 'lucide-react-native';
import { DrawerActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  const navigation = useNavigation();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const bottomInset = insets.bottom;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7c3aed',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarAllowFontScaling: false,
        tabBarButton: HapticTab,
        tabBarHideOnKeyboard: true,
        animation: 'shift',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#f1f5f9',
          borderTopWidth: 1,
          height: 64 + bottomInset,
          paddingBottom: bottomInset,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          height: 56,
          paddingVertical: 2,
        },
        tabBarIconStyle: {
          marginTop: 2,
          marginBottom: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          lineHeight: 14,
          marginTop: 1,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Home size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="operaciones"
        options={{
          title: 'Operaciones',
          tabBarIcon: ({ color }) => <FileText size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="fab"
        options={{
          title: '',
          tabBarIcon: () => (
            <View className="bg-violet-600 w-12 h-12 rounded-full items-center justify-center -mt-5 border-4 border-white shadow-sm shadow-violet-200">
              <Plus size={26} color="white" />
            </View>
          ),
          // Disable default click so we could show a modal or action sheet
          tabBarButton: (props: any) => (
            <TouchableOpacity 
              {...props} 
              activeOpacity={0.8}
              onPress={() => router.push('/operaciones/nueva')}
            />
          )
        }}
      />
      <Tabs.Screen
        name="clientes"
        options={{
          title: 'Clientes',
          tabBarIcon: ({ color }) => <Users size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mas"
        options={{
          title: 'Más',
          tabBarIcon: ({ color }) => <Menu size={25} color={color} />,
          tabBarButton: (props: any) => (
             <TouchableOpacity 
              {...props} 
              activeOpacity={0.8}
              onPress={() => {
                 // The "Más" tab opens the drawer menu
                 navigation.dispatch(DrawerActions.openDrawer());
              }} 
            />
          )
        }}
      />
    </Tabs>
  );
}
