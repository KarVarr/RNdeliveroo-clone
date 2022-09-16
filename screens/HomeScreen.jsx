import {
  Image,
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Icons from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5 '>
      {/* Header */}
      <View className='flex-row pb-3 justify-start items-center mx-4 space-x-2 '>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1 '>
          <Text className='font-bold text-gray-400 text-xs '>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Corrent Location
            <Icons.ChevronDownIcon size={20} color='#00ccbb' />
          </Text>
        </View>
        <Icons.UserIcon size={35} color='#00ccbb' />
      </View>
      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
        <View className='flex-row flex-1 items-center bg-gray-200 p-3 rounded-3xl'>
          <Icons.MagnifyingGlassIcon color='gray' size={20} />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <Icons.AdjustmentsVerticalIcon color='#00ccbb' />
      </View>

      {/* body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured  */}

        <FeaturedRow
          title='Featured'
          description='Paid placements from our partners'
          id='1'
        />
        {/* Tasty Discounts  */}
        <FeaturedRow
          title='Featured'
          description='Paid placements from our partners'
          id='2'
        />
        {/* Offers near you  */}
        <FeaturedRow
          title='Featured'
          description='Paid placements from our partners'
          id='3'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
