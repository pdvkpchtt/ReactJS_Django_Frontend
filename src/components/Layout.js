const Layout = ({ children }) => {
  return (
    <div
      className="h-[calc(100vh-63px)]
        flex flex-col justify-start 
        max-w-[1012px] [@media(pointer:coarse)]:max-w-[500px] mx-auto
        p-[16px] [@media(pointer:coarse)]:p-[0px]
        items-start [@media(pointer:coarse)]:items-center 
    "
    >
      {children}
    </div>
  );
};

export default Layout;
