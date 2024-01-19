import React, {ComponentProps, forwardRef} from 'react'
import clsx from 'clsx';

enum InputSize {
  SM = 'SM',
  BASE = 'BASE',
}

interface InputProps {
  type?: ComponentProps<'input'>['type'];
  name: ComponentProps<'input'>['name'];
  placeholder: ComponentProps<'input'>['placeholder'];
  onChange: ComponentProps<'input'>['onChange'];
  onBlur: ComponentProps<'input'>['onBlur'];
  size?: keyof typeof InputSize;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({size = InputSize.BASE, ...inputProps}, ref) => {
    const inputClasses = clsx('border border-black/15 rounded w-full', {
      'py-3 px-6 text-xl': size === InputSize.BASE,
      'py-1 px-2 text-base': size === InputSize.SM,
    });

    return <input ref={ref} {...inputProps} className={inputClasses} />;
  }
);
