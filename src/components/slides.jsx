
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

function Slides() {
    const images = [
        'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg',
        'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8074e7b2f6d2bfea.jpg',
        'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg'
    ];

    return (
        <section className='m-2 bg-[#ffffff] h-[33vh'>
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} 
                slidesPerView={1}
                autoplay
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className='w-full h-[30vh] mx-auto select-none object-cover' 
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Slides;