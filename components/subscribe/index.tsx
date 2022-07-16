const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/a0.png)'}} className="subscribe__content">
          <h4>Enjoy 10% discount on summer fruit arrivals</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Get E-mail alert</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe
