const Layout = ({ children }) => {
  return (
    <div
      id="layout"
      className="min-h-screen min-w-screen flex justify-center items-center bg-gradient-to-t from-gray-400 to-blue-500"
    >
      {children}
    </div>
  );
};
export default Layout;
