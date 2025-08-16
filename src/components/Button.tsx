interface Props {
  text: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ text, color = "primary", onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {text}
    </button>
  );
};

export default Button;
