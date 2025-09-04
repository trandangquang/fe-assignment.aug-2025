import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/CategoriesSection.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from '../components/Button/Button';

const CategoriesSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='max-w-[1320px] w-full h-[110px] flex justify-around items-center bg-white rounded-2xl border-2 border-[#1CA8CB] mt-[-60px] z-20'>
        <select className='w-[248.58px]' name="Destination" id="Destination">
          <option value="Destination">Destination</option>
          <option value="Destination">Destination</option>
        </select>

        <select className='w-[248.58px]' name="Activity" id="Activity">
          <option value="Activity">Activity</option>
          <option value="Activity">Activity</option>
        </select>

        <select className='w-[248.58px]' name="Time" id="Time">
          <option value="time">0 Days - 6 Days</option>
          <option value="time">0 Days - 6 Days</option>
        </select>

        <select className='w-[248.58px]' name="Money" id="Money">
          <option value="money">200$ - 580$</option>
          <option value="money">200$ - 580$</option>
        </select>

        <Button className='rounded-full px-10 py-3 bg-[#1CA8CB] text-white' >Search</Button>
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
