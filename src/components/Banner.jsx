

function Banner({ image }) {

    return(
        <div className="Banner-Container">
            <div className="Picture">
                <img src={image} alt="Banner"/>
            </div>
        </div>
    );

}

export default Banner;