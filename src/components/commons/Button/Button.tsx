import { ButtonProps } from "../../../styled";
import { ButtonContainerStyle } from "./button.style";

const Button = ({ children, variant = "contained", ...props }: ButtonProps) => {
  return (
    <ButtonContainerStyle variant={variant} {...props}>
      {children}
    </ButtonContainerStyle>
  );
};

export default Button;
