import React from 'react';
import { ProductCard } from '../../components/products/product-card/product-card.component';
import { Ratings } from '../../components/ui/ratings/ratings.component';
import style from './products.module.scss';

const ProductsPage = () => {
  const items = [0, 2, 3, 4, 5];
  return (
    <div className={style['product-page']}>
      {items.map((re, i) => (
        <div className={style['product-page__item']} key={i}>
          <ProductCard />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
