import { Drawer } from 'expo-router/drawer';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  Home, Users, Package, FileText, Calendar,
  RefreshCw, FileSignature, CreditCard, BarChart2, Settings, Crown
} from 'lucide-react-native';

function CustomDrawerContent(props: any) {
  const { navigation } = props;
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const DRAWER_ITEMS = [
    { label: 'Inicio', icon: Home, route: '(tabs)', active: true },
    { label: 'Clientes', icon: Users, route: 'clientes' },
    { label: 'Productos / Servicios', icon: Package, route: 'productos' },
    { label: 'Operaciones', icon: FileText, route: 'operaciones' },
    { label: 'Calendario', icon: Calendar, route: 'calendario' },
    { label: 'Alquileres', icon: Home, route: 'alquileres' },
    { label: 'Suscripciones', icon: RefreshCw, route: 'suscripciones' },
    { label: 'Cotizaciones', icon: FileSignature, route: 'cotizaciones' },
    { label: 'Pagos', icon: CreditCard, route: 'pagos' },
    { label: 'Reportes', icon: BarChart2, route: 'reportes' },
    { label: 'Configuración', icon: Settings, route: 'configuracion' },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-violet-600 px-5 pb-6" style={{ paddingTop: insets.top + 28 }}>
        <View className="flex-row items-center">
          <View className="mr-3 h-12 w-12 items-center justify-center rounded-full border border-white/60">
            <Text className="text-xl font-bold text-white">A</Text>
          </View>

          <View className="flex-1">
            <Text className="text-base font-bold text-white">Ana López</Text>
            <Text className="mt-1 text-sm font-medium text-violet-100">Plan Pro</Text>
          </View>
        </View>
      </View>

      {/* Body */}
      <ScrollView className="flex-1 px-3 py-4" showsVerticalScrollIndicator={false}>
        {DRAWER_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isActive = item.active;

          return (
            <View key={index} className="relative mb-1 overflow-hidden rounded-xl">
              {isActive && <View className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-violet-500" />}
              <TouchableOpacity
                className={`flex-row items-center py-3.5 px-4 ${isActive ? 'bg-violet-50' : 'bg-transparent'}`}
                onPress={() => {
                  navigation.closeDrawer();

                  if (item.route === '(tabs)') {
                    navigation.navigate('(tabs)');
                  } else if (item.route === 'clientes') {
                    router.push('/clientes');
                  } else if (item.route === 'operaciones') {
                    router.push('/operaciones');
                  } else if (item.route === 'calendario') {
                    router.push('/calendario');
                  }
                }}
              >
                <Icon size={19} color={isActive ? '#7c3aed' : '#475569'} />
                <Text className={`ml-4 text-[15px] font-semibold ${isActive ? 'text-violet-600' : 'text-slate-700'}`}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Footer */}
      <SafeAreaView edges={['bottom']} className="bg-white px-4 pt-2 pb-4">
        <TouchableOpacity
          className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-4"
          onPress={() => {
            navigation.closeDrawer();
            router.push('/plan-pro');
          }}
        >
          <View className="flex-row items-center">
            <View className="mr-3 h-9 w-9 items-center justify-center rounded-xl bg-amber-50">
              <Crown size={18} color="#f59e0b" />
            </View>

            <View className="flex-1">
              <Text className="text-sm font-bold text-slate-800">
                Tu plan: <Text className="text-violet-600">Pro</Text>
              </Text>
              <Text className="mt-1 text-xs text-slate-500">Vence el 20/06/2024</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '82%',
          backgroundColor: '#ffffff',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          shadowColor: 'transparent',
          elevation: 0,
        },
        overlayColor: 'rgba(15, 23, 42, 0.32)',
        sceneStyle: { backgroundColor: '#ffffff' },
      }}
    >
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  );
}
