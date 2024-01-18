import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./carrouselGallery.css"

export default function CarrouselGalley({ itemData}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {itemData.map((item, index) => (
          <div  key={index}  className="box-img-carrousel">
              <Image src={item.img} alt={item.title} width={item.width} height={item.height} />
          </div>
        ))}
      </Slider>
    )
}