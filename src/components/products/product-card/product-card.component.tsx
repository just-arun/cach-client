import { FaStar } from 'react-icons/fa';
import style from './product-card.module.scss';

export interface ProductCardProps {
  image: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const img =
    'https://rukminim1.flixcart.com/image/612/612/ka492fk0/screen-guard/tempered-glass/y/e/m/flipkart-smartbuy-fsb-ftg-iphonese2020-blk-01-original-imafrqurxfzza2hh.jpeg?q=70';
  return (
    <div className={style['product-card']}>
      <div className={style['product-card__image']}>
        <img height={200} width={200} src={img} alt="img" />
      </div>
      <div className={style['product-card__content']}>
        <div className={style['product-card__content__description']}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga optio ipsum dolorum
          repellat molestiae id! Aliquid veritatis voluptatum accusantium repudiandae, rem eaque
          sequi veniam, facere tempora, odio eligendi quos sit!
        </div>
        <div>
          {3.4} <FaStar /> (743)
        </div>
        <div>
          <span>&#8377;.399</span> <s>400</s>
        </div>
      </div>
    </div>
  );
};
