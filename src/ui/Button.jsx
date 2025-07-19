function Button({ children, onClick, style, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {children}
    </button>
  );
}

export default Button;
