const Layout = ({ children }) => {
  return (
    <div
      className="h-full [@media(pointer:coarse)]:h-[100vh]
        flex flex-col justify-start
        max-w-[1012px] [@media(pointer:coarse)]:max-w-[500px] mx-auto
        p-[16px] [@media(pointer:coarse)]:p-[0px]
        items-start [@media(pointer:coarse)]:items-center 
        [@media(pointer:coarse)]:overflow-hidden
    "
    >
      {children}
    </div>
  );
};

export default Layout;
