import { ScrollView, Text } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Catefory Card */}
      <CategoryCard
      
        imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
        title='Testing'
      />
      <CategoryCard
        imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
        title='Testing'
      />
      <CategoryCard
        imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
        title='Testing'
      />
      <CategoryCard
        imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
        title='Testing'
      />
      <CategoryCard
        imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
        title='Testing'
      />
      <CategoryCard
        imgUrl='https://st.depositphotos.com/1005682/2476/i/600/depositphotos_24762569-stock-photo-fast-food-hamburger-hot-dog.jpg'
        title='Testing'
      />
    </ScrollView>
  );
}
