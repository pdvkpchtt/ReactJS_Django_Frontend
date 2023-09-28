import TextMain from "../../shared/text/TextMain";

const Right = () => {
  return (
    <>
      {[...Array(100)].map((key) => (
        <TextMain text={"post"} key={key} />
      ))}
    </>
  );
};

export default Right;
