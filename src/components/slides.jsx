import React from 'react';

import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

function Slides() {
    const images = [
        'https://images.pexels.com/photos/16770561/pexels-photo-16770561/free-photo-of-scenic-view-of-green-hills-and-mountains.jpeg',
        'https://images.pexels.com/photos/20041507/pexels-photo-20041507/free-photo-of-close-up-of-sleeping-cat.jpeg',
        'https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg',
        'https://images.pexels.com/photos/11785594/pexels-photo-11785594.jpeg'
    ];

    return (
        <section className='m-2 z-10'>
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className='w-full h-[30vh] mx-auto select-none object-cover' // Updated class
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Slides;