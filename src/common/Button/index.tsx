import { StyledButton, Button2 } from "./styles"; // Importing both StyledButton and Button2
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick }: ButtonProps) => (
  <>
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  </>
);


