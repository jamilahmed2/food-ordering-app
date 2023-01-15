import React from 'react'

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleFade" class="carousel slide carousel-fade  " style={{objectFit: "contain !important"}}>
        <div class="carousel-inner" id='carousel'>
          <div class="carousel-caption d-none d-md-block" style={{zIndex: "10" }}>
            <form className="d-flex my-2 my-lg-0">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-primary my-2 my-sm-0 text-white " type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/300x300?burger" alt='' className="d-block w-100" style={{filter:"brightness(80%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300x300?momos" alt='' className="d-block w-100" style={{filter:"brightness(80%)"}} />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300x300?seafood" alt='' className="d-block w-100" style={{filter:"brightness(80%)"}} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel