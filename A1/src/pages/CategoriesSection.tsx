import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/CategoriesSection.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CategoriesSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='max-w-[1320px] w-full h-[110px] bg-amber-200 rounded-2xl border-2 border-[#1CA8CB] mt-[-60px] z-20'>
        form
      </div>

      <div className='w-full'>
        <div className='mt-[80px] text-center'>
          <p className='text-[40px] leading-10 font-[Montez] text-[#113D48]'>
            Wornderful Place For You
          </p>
          <h2 className='text-[48px] leading-[63.7px] font-bold text-[#113D48]'>
            Tour Categories
          </h2>
        </div>

        <div className='categories-swiper mt-10'>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlidesBounds={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            <SwiperSlide className='w-full h-full'>
              <div className='w-full max-w-[306.8px] aspect-[306.8/303.84] absolute bottom-[-34px]'>
                <img
                  src='/images/wildlife.png'
                  alt='wildlife'
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
              <div className='w-full max-w-[306.8px] aspect-[306.8/303.84] absolute bottom-0'>
                <img
                  src='/images/walking.png'
                  alt='walking'
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className='w-full h-full'>
              <div className='w-full max-w-[306.8px] aspect-[306.8/303.84]'>
                <img
                  src='/images/cruiser.png'
                  alt='cruiser'
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
              <div className='w-full max-w-[306.8px] aspect-[306.8/303.84] absolute bottom-0'>
                <img
                  src='/images/hiking.png'
                  alt='hiking'
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-full h-full'>
              <div className='w-full max-w-[306.8px] aspect-[306.8/303.84] absolute bottom-[-34px]'>
                <img
                  src='/images/airbird.png'
                  alt='airbird'
                  loading='lazy'
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
