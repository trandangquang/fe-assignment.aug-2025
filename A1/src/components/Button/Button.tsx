import type { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './styles';

type ButtonStyles = VariantProps<typeof buttonStyles>;

export type TButtonProps = React.ComponentPropsWithoutRef<'button'> &
  ButtonStyles & {
    suffixIcon?: React.ReactNode;
    prefixIcon?: React.ReactNode;
    classes?: {
      prefixIcon?: string;
      suffixIcon?: string;
    };
  };

const Button = ({
  variant = 'default',
  size = 'md',
  className,
  children,
  prefixIcon,
  suffixIcon,
  classes,
  ...props
}: TButtonProps) => {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      {...props}
      onClick={(e) => {
        if (props.disabled) {
          return;
        }
        props.onClick?.(e);
      }}
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
    </button>
  );
};

export default Button;
