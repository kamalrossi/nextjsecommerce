import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>E</span>-Shop</h6>
            <p>GoodMart brings you fresh vegetable and fruit at the cheapest cost at your doorsteps</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Product</li>
              <li><a href="#">Veg</a></li>
              <li><a href="#">Fruit</a></li>
              <li><a href="#">Other</a></li>
              
            </ul>
            <ul>
              <li>Deal</li>
              <li><a href="#">New Arrival</a></li>
              <li><a href="#">Summer Festival</a></li>
              
            </ul>
            <ul>
              <li>About us</li>
              <li><a href="#">info@goodnmart.xyz</a></li>
              <li><a href="#">Hotline: +42 33434 343234 33</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>GoodMart 2022- Your Green Partner.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer
