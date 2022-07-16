import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
SwiperCore.use([EffectFade, Navigation]);
const PageIntro = () => {
  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/vegetable.png')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Fresh and Green Vegetables</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Order now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/fruit.png')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>We provide healthy food from certified authority</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Cryto-Wallet available</h4>
                <p>Famous crypto wallets are available</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Delivery</h4>
                <p>Delivery within 24 hours</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Secured Transactions</h4>
                <p>No extra charge on buying things</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro
