import {ComponentProps, FC, PropsWithChildren} from 'react';
import clsx from 'clsx';

export enum ButtonStyleEnum {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  GREEN = 'GREEN'
}

enum ButtonSizeEnum {
  BASE = 'BASE',
  LG = 'LG'
}

interface ButtonProps {
  btnStyle?: keyof typeof ButtonStyleEnum;
  size?: keyof typeof ButtonSizeEnum;
  type?: ComponentProps<'button'>['type'];
  disabled?: ComponentProps<'button'>['disabled'];
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  btnStyle = ButtonStyleEnum.DARK,
  size = ButtonSizeEnum.BASE,
  children,
  ...buttonProps
}) => {
  const btnClasses = clsx(
    'text-center align-middle cursor-pointer select-none border active:bg-blog-gray-650',
    {
      'border-blog-gray-700 text-blog-gray-700 hover:bg-blog-gray-400 focus:bg-blog-gray-400':
        btnStyle === ButtonStyleEnum.DARK,
      'border-blog-gray-400 text-blog-gray-400 hover:bg-blog-gray-400 hover:text-white':
        btnStyle === ButtonStyleEnum.LIGHT,
      'border-blog-green bg-blog-green text-white hover:bg-blog-darkGreen hover:border-blog-darkGreen hover:text-white active:bg-blog-darkGreen':
        btnStyle === ButtonStyleEnum.GREEN,
      'py-1 px-2 text-sm rounded-buttonSm': size === ButtonSizeEnum.BASE,
      'py-3 px-6 text-xl rounded': size === ButtonSizeEnum.LG
    }
  );

  return (
    <button className={btnClasses} {...buttonProps}>
      {children}
    </button>
  );
};
