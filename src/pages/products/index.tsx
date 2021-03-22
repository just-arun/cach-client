import React from 'react';
import style from './products.module.scss';

const ProductsPage = () => {
  const items = [0, 2, 3, 4, 5];
  return (
    <div className={style['product-page']}>
      {items.map((re) => (
        <div className={style['product-page__item']}>item</div>
      ))}
    </div>
  );
};

export default ProductsPage;
