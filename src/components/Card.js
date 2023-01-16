import React from 'react'

const Card = (props) => {

    let options = props.options;
    let priceOptions = Object.keys(options)

    return (
        <>
            <div className="card mt-3" style={{ width: "18rem", maxheight: "360px" }}>
                <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:'300px',objectfit:'fill'}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    {/* <p className="card-text"> Some quick example textbulk of the card's content. </p> */}
                    <div className="container w-100">
                        <select name="" id="" className="m-2 h-100  rounded bg-primary">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select name="" id="" className="m-2 h-100  rounded bg-primary">
                            {
                                priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>

                        <div className="d-inline h-100 fs-5">
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card