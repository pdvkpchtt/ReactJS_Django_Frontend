const TextMain = ({ styles = "", text = "", onClick }) => {
  return (
    <div
      className={`${styles} transition duration-[250ms] break-words text-[#2c2c2c] dark:text-white`}
      onClick={onClick ? () => onClick() : null}
    >
      {text}
    </div>
  );
};

export default TextMain;
