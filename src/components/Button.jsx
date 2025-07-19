const Button = ({ onClick, text, emoji }) => {
  return (
    <button onClick={onClick}>
      {emoji} {text}
    </button>
  );
};

export default Button;
