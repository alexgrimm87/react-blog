import React, {ComponentProps, forwardRef} from 'react'

interface InputProps {
  type?: ComponentProps<'input'>['type'];
  name: ComponentProps<'input'>['name'];
  placeholder: ComponentProps<'input'>['placeholder'];
  onChange: ComponentProps<'input'>['onChange'];
  onBlur: ComponentProps<'input'>['onBlur'];
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({...inputProps}, ref) => {
  return (
    <input
      ref={ref}
      {...inputProps}
      className="border border-black/15 rounded py-3 px-6 text-xl w-full"
    />
  );
});
