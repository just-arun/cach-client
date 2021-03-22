import style from './button.module.scss';

export interface ButtonProp {
  children: any;
  className?: string;
  onClick?: (e: any) => void;
}

export const Button = (props: ButtonProp) => {
  return (
    <button className={`${style.button} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
