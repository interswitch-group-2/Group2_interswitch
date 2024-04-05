const Header = ({title}) => {
  return (
    <>
      <header className="w-full bg-powderblue text-black-300 fixed top-0 left-0 right-0">
        <div className="bg-blue-300">
        <img
              src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
              width="130"
              className="mr-10"
              alt="Interswitch Logo"
              />
              <p className="text-center leading-tight tracking-tight text-white-900 text-3xl dark:text-white">{title}</p>
        </div>
      </header>
    </>
  );
};

export default Header;