import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/HeroSection.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from '../components/Button/Links';

const HeroSection = () => {
  return (
    <>
      <div className='button-prev custom-nav'>
        <img src='/images/arrow.png' alt='prev' className='button-prev-img' />
      </div>
      <div className='button-next custom-nav'>
        <img src='/images/arrow.png' alt='next' className='button-next-img' />
      </div>
      <Swiper
        direction='vertical'
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.button-prev',
          nextEl: '.button-next',
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div
            className='w-full max-w-[1920px] h-full aspect-[1920/805.38] bg-center bg-cover'
            style={{ backgroundImage: "url('/images/hero-background.png')" }}
          >
            <div className='max-w-[700px] h-full text-left flex flex-col justify-center ml-[310px]'>
              <div>
                <p className='text-[40px] leading-10 font-[Montez] text-white '>
                  Get unforgetable pleasure with us
                </p>
                <h1 className='font-bold text-[80px] leading-[94.4px] text-white'>
                  Explore beauty of the whole world
                </h1>
              </div>
              <div className='flex items-center gap-4 mt-8'>
                <Link
                  href='#'
                  className='bg-[#1CA8CB] text-white rounded-full px-6 py-4 font-light hover:bg-[#42c1de]'
                >
                  Explore Tours
                  <img
                    src='/images/arrow.png'
                    alt='arrow'
                    className='w-6 h-6'
                  />
                </Link>
                <Link
                  href='#'
                  className='rounded-full px-6 py-4 bg-white/0 border-[1px] border-white text-white font-light hover:bg-white/20'
                >
                  Our Services
                  <img
                    src='/images/arrow.png'
                    alt='arrow'
                    className='w-6 h-6'
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
