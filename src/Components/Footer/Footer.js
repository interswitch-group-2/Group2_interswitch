import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-100 text-right p-32 overflow-hidden">
        <div className="flex justify-between items-center h-96">
          <section className="footer_bottom">
            <div className="row">
              <div className="col-md-3 @copyRrite">
                <a href="">
                  <h3 className="Logo">
                    <img
                      src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
                      width="130"
                      className="mb-2 mt-3 ml-0 mr-12" // Adjusted ml-6 to ml-0
                      alt="Interswitch Logo"
                    />
                  </h3>
                </a>
              </div>

              <div className="col-md-5 news_widget text-center copyRight">
                <small>© 2024 Interswitch Group 2.</small>
              </div>

              <div className="col-md-4">
                <div className="cbn-flex">
                  <small className="text">Contact Us Terms & Condition Privacy Policy</small>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
