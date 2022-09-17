import { ScrollView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';
import { data } from 'autoprefixer';
import { urlFor } from '../sanity';
import axios from 'react-native-axios';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {

  //     sanityClient
  //       .fetch(
  //         `
  //   *[_type == 'category']
  //   `
  //       )
  //       .then(data => {
  //         setCategories(data);
  //       });
  // }, []);
  useEffect(() => {
    fetch('./arr.json').then(res => res.json).then(res => setCategories(res));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Catefory Card */}

      {categories.map(category => {
        <CategoryCard
          key={category.id}
          imgUrl={category.imageUrl}
          // imgUrl={urlFor(category.image).url()}
          title={category.title}
        />;
      })}
    </ScrollView>
  );
}
