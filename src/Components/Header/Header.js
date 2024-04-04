const Header = ({title}) => {
  return (
    <>
      <header className="w-full overflow-hidden text-black-400">
        <div className="bg-blue-300">
        <img
              src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
              width="130"
              className="mr-10"
              alt="Interswitch Logo"
              />
              <p className="text-center font-bold leading-tight tracking-tight text-white-900 dark:text-white">{title}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
