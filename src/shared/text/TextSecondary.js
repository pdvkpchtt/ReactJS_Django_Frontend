const TextSecondary = ({ styles = "", text = "", onClick }) => {
  return (
    <div
      className={`${styles} break-words text-[#8f8f8f]`}
      onClick={onClick ? onClick : null}
    >
      {text}
    </div>
  );
};

export default TextSecondary;
