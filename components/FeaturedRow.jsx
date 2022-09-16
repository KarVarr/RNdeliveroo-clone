import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ title, description, id }) {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'> {title}</Text>
        <Icon.ArrowRightIcon color='#00ccbb' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className='pt-4 '
      >
        {/* RestaurantCard staff */}
        
        <RestaurantCard

          id={123}
          imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test desctiption'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test desctiption'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
          title='Yo! Sushi'
          rating={4.5}
          genre='Japanese'
          address='123 Main St'
          short_description='This is a Test desctiption'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
