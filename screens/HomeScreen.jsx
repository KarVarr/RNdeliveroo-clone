import { Image, View, Text, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Icons from 'react-native-heroicons/solid';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className='text-green-500'>
        {/* Header */}
        <View className='flex-row pb-3 justify-start items-center mx-4 space-x-2'>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver Now!
            </Text>
            <Text className='font-bold text-xl'>
              Corrent Location
              <Icons.ChevronDownIcon size={20} color='#00ccbb' />
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
