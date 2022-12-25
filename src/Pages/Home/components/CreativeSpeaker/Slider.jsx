
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import SpeakersData from '../../../../design-system/components/CreativeSpeakers/SpeakersData'
import Speakers from '../../../../design-system/components/CreativeSpeakers'


export default function Slider() {
  return (
    <Swiper
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    loop={true}
    modules={[Autoplay]} 
    spaceBetween={50} 
    slidesPerView={4}
    >
      {SpeakersData.map(item => {
          return(
            <SwiperSlide key={item.id}>
                <Speakers alt={item.alt} name={item.name} img={item.img} job={item.job}/>
            </SwiperSlide>
          )
        })}
    </Swiper>
  );
};

