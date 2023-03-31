import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 header-slider pe-0">
            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/05/book-slider-s2-img.png" alt="slider" />
          </div>
          <div className="col-12 col-sm-6 col-md-6 header-data ps-0">
            <p className='text-uppercase header-category'>World bestsellers</p>
            <h1 className='header-title'>Simply Elegant <br /> Humbert Jemmy</h1>
            <p className='slider-data'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            <div className="header-btns">
              <button className='btn btn-add text-uppercase text-light me-4'>Add to cart</button>
              <button className='btn btn-view text-uppercase'>View more</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header