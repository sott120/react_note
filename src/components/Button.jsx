import "./Button.css";

const Button = ({ text, type, onClick }) => {
  const buttonClassName = type ? `Button Button_${type}` : "Button";
  return (
    <button onClick={onClick} className={buttonClassName}>
      {text}
    </button>
  );
};

export default Button;
