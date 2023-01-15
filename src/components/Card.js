import React from 'react'

const Card = () => {
  return (
    <>
    <div className="card mt-3" style={{ width: "18rem", maxheight: "360px" }}>
                <img src="https://source.unsplash.com/random/300x300?burger" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <div className="container w-100">
                        <select name="" id="" className="m-2 h-100  rounded bg-primary">
                            {Array.from(Array(6),(e,i)=>{
                                return(
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })}
                        </select>

                        <select name="" id="" className="m-2 h-100  rounded bg-primary">
                            <option  value="full">Full</option>
                            <option  value="Half">Half</option>
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