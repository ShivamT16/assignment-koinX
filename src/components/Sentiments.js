import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./sentiments.css"
import image from "./images/analysis.png"
 
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, padding: "2rem" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "lightgrey", borderRadius:"2rem" }}
        onClick={onClick}
      />
    );
  }
  

export const Sentiments = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div className="sentiments">
            <h2>Sentiments</h2>
            <h3 style={{color: "grey"}}>Key Events</h3>
            <div className="sentiment-blog">
                <Slider {...settings} >
<div className="blog" >
    {/* <div> */}
    {/* <img alt="blog-img" className="blog-img" src={newsIcon} ></img> */}
    {/* </div> */}
    {/* <div className="blog-para" > */}
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  laborum.</p>
    {/* </div> */}
</div>
<div className="blog">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  laborum.</p>
</div>
<div className="blog">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  laborum.</p>
</div>
</Slider>
            </div>
            <div>
<h3 style={{color: "grey"}}>Analyst Estimates</h3>
<img className="analtic-img" alt="analysis loading" src={image} ></img>
            </div>
        </div>
    )
}