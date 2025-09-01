import React from 'react';
import type { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './styles';

type ButtonStyles = VariantProps<typeof buttonStyles>;

export type TLinkProps = React.ComponentPropsWithoutRef<'a'> &
  ButtonStyles & {
    suffixIcon?: React.ReactNode;
    prefixIcon?: React.ReactNode;
    classes?: {
      prefixIcon?: string;
      suffixIcon?: string;
    };
  };

const Link = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  prefixIcon,
  suffixIcon,
  classes,
  ...props
}: TLinkProps) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {prefixIcon && (
        <span className={`size-4 ${classes?.prefixIcon || ''}`}>
          {prefixIcon}
        </span>
      )}
      {children}
      {suffixIcon && (
        <span className={`size-4 ${classes?.suffixIcon || ''}`}>
          {suffixIcon}
        </span>
      )}
    </a>
  );
};

export default Link;
