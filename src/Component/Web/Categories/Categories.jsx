import axios from "axios";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import { Link } from "react-router-dom";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import './Categories.css'
import { useContext } from "react";
import { CartContext } from "../Context/Cart";



export default function Categories() {
  const x = useContext(CartContext)
  console.log(x);

  const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=7`);
    return data;
  };

  const { data, isLoading } = useQuery("Web_categories", getCategories);

  if (isLoading) {
    return <h2>lodaing...</h2>;
  }
  return (
    <div className="container">
      <div className="swiper_custem_pagination"></div>
      <Swiper
        modules={[Navigation, Pagination , Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{
          delay:3000
        }}
        pagination={{
          clickable : true,
          el:'.swiper_custem_pagination'
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
      {data?.categories.length?data?.categories.map( (category)=>
        <SwiperSlide  key={category._id}>
          <Link to={`/products/category/${category._id}`}>
          <img src={category.image.secure_url} />
          </Link>
        </SwiperSlide>
       ):'no category found'}
      </Swiper>
    </div>
  );
}
