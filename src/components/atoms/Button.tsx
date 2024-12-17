import MuiButton, {
  type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";

export type ButtonProps = {
  foo: string;
} & MuiButtonProps;

export const Button: React.FC<ButtonProps> = ({ foo }) => {
  return <MuiButton>{foo}</MuiButton>;
};
