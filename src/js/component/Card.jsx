import React from "react";

const Card = () => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="card m-2 " >
                <img src="https://picsum.photos/100/100" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary">
                        Find Out More
                    </button>
                </div>

            </div >
        </div>


    );
};
export default Card;
