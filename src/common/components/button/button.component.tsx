import {ComponentProps, FC, PropsWithChildren} from 'react';
import clsx from 'clsx';

export enum ButtonStyleEnum {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  GREEN = 'GREEN',
  DANGER = 'DANGER'
}

enum ButtonSizeEnum {
  BASE = 'BASE',
  LG = 'LG'
}

enum ButtonVariantEnum {
  BASE = 'BASE',
  OUTLINE = 'OUTLINE'
}

interface ButtonProps {
  btnStyle?: keyof typeof ButtonStyleEnum;
  variant?: keyof typeof ButtonVariantEnum;
  size?: keyof typeof ButtonSizeEnum;
  type?: ComponentProps<'button'>['type'];
  disabled?: ComponentProps<'button'>['disabled'];
  onClick?: ComponentProps<'button'>['onClick'];
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  btnStyle = ButtonStyleEnum.DARK,
  size = ButtonSizeEnum.BASE,
  variant = ButtonVariantEnum.BASE,
  children,
  ...buttonProps
}) => {
  const btnClasses = clsx(
    'text-center align-middle cursor-pointer select-none border active:bg-blog-gray-650 disabled:opacity-70',
    {
      'border-blog-gray-700 text-blog-gray-700 hover:bg-blog-gray-400 focus:bg-blog-gray-400':
        btnStyle === ButtonStyleEnum.DARK,
      'border-blog-gray-400 text-blog-gray-400 hover:bg-blog-gray-400 hover:text-white':
        btnStyle === ButtonStyleEnum.LIGHT,
      'border-blog-green active:bg-blog-darkGreen':
        btnStyle === ButtonStyleEnum.GREEN,
      'bg-blog-green text-white hover:bg-blog-darkGreen hover:border-blog-darkGreen hover:text-white':
        btnStyle === ButtonStyleEnum.GREEN &&
        variant === ButtonVariantEnum.BASE,
      'bg-white text-blog-green hover:bg-blog-green hover:text-white disabled:bg-blog-darkGreen disabled:text-white':
        btnStyle === ButtonStyleEnum.GREEN &&
        variant === ButtonVariantEnum.OUTLINE,
      'border-blog-red text-blog-red hover:bg-blog-red focus:bg-blog-red hover:text-white':
        btnStyle === ButtonStyleEnum.DANGER,
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
