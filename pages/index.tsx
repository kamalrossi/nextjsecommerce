import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/veg.png)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Seasonal and leafy vegetable at 10% Sale</h3>
              <a href="#" className="btn btn--rounded">View All</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/frui1.png)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Imported fruits on 20% Sales</h3>
              <a href="#" className="btn btn--rounded">View All</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/frui2.png)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Local fruits on 10% Sale</h3>
              <a href="#" className="btn btn--rounded">View All</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Our Specialities</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Fresh Vegetable</h4>
                <p>All vegetables are available at your doorstep within hour</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Imported Fruit</h4>
                <p>We bring your fruits from western countries with good quality</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>No--Chemical</h4>
                <p>In-house farming, no chemical is guranteed.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Cheaper Price</h4>
                <p>We brought you with the minimal and garden price.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage
