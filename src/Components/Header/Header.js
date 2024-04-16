const Header = ({ title, showImage }) => {
  return (
    <header className="w-full bg-powderblue text-black-300 fixed top-0 left-0">
      <div className="bg-blue-300">
        <a href="#" className="flex items-center">
          {showImage && (
            <img
              src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
              style={{ width: '150px' }}
              alt="interswitch Logo"
            />
          )}
          <p className="flex justify-between text-center mx-[30%] text-2xl ">{title}</p>
        </a>
      </div>
    </header>
  );
};
export default Header;