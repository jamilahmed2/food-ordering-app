import React, { useState, useEffect } from "react";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    const [search, setSearch] = useState('')
    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    // fetching data
    const loadData = async () => {
        let response = await fetch('http://localhost:5000/api/data/foodData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json()
        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0],response[1])

    }

    useEffect(() => {
        loadData()
    }, [])
    return (

        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade  " style={{ objectfit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center my-2 my-lg-0">
                                <input className="form-control me-sm-2" type="text" placeholder="Search" value={search}
                                 onChange={(e)=>{setSearch(e.target.value)}}/>
                                {/* <button className="btn btn-primary my-2 my-sm-0 text-white " type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/300x300?burger" alt='' className="d-block w-100" style={{ filter: "brightness(80%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/300x300?momos" alt='' className="d-block w-100" style={{ filter: "brightness(80%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/300x300?seafood" alt='' className="d-block w-100" style={{ filter: "brightness(80%)" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className="row ">
                                    <div key={data._id} className="fs-3 m-3">
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem !== []
                                        ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                                    <Card
                                                        foodName={filterItems.name}
                                                        options={filterItems.options[0]}
                                                        imgSrc={filterItems.img}
                                                    />
                                                </div>
                                            )
                                        }
                                        ):"No Such Data Found"
                                    }
                                </div>
                            )
                        })
                        : ""
                }
                {/* <Card /> */}
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
};

export default Home;
