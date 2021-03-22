import Link from 'next/link';
import style from './ratings.module.scss';
import { FaStar } from 'react-icons/fa';

export interface RatingsProps {
  rating: number;
  onClick?: (e: any) => void;
  link?: string;
  reviews: number;
}

export const Ratings = (props: RatingsProps) => {
  const { rating, onClick, link, reviews } = props;
  return (
    <Link href={!!link ? link : ''}>
      <div className={style['ratings']} onClick={onClick}>
        <div className={style['ratings__raging']}>
          <span className={style['ratings__raging__score']}>
            {rating}
            <FaStar />
          </span>
          <span className={style['ratings__raging__count']}>({rating})</span>
        </div>
        <div className={style['ratings__preview']}>
          <div className={style['ratings__preview__rating']}>
            <div className={style['ratings__preview__rating']}>
              {rating} <FaStar />
            </div>
            <div>
              {rating} Ratings & <br />
              {reviews} Reviews
            </div>
          </div>
          <div className={style['ratings__preview__ranges']}></div>
        </div>
      </div>
    </Link>
  );
};
