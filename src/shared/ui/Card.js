const Card = ({ children, styles = "" }) => {
  return (
    <div
      className={`${styles} rounded-[20px] p-[12px] bg-white dark:bg-[#212122] transition duration-[250ms]`}
    >
      {children}
    </div>
  );
};

export default Card;
