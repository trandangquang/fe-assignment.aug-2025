import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from '../components/Button/Links';

type Destination = {
  name: string;
  listings: number;
  image: string;
};

const destinations: Destination[] = [
  {
    name: 'Thailand',
    listings: 22,
    image: '/images/thailand.png',
  },
  {
    name: 'Nepal',
    listings: 22,
    image: '/images/nepal.png',
  },
  {
    name: 'Maldives',
    listings: 15,
    image: '/images/maldives.png',
  },
  {
    name: 'Island',
    listings: 20,
    image: '/images/island.png',
  },
  {
    name: 'Dubai',
    listings: 20,
    image: '/images/dubai.png',
  },
];

const DestinationSection = () => {
  return (
    <div className='flex flex-col justify-center items-center max-w-[1340px] w-full mx-auto'>
      <div className='mt-[80px] text-center'>
        <p className='text-[40px] leading-10 font-[Montez] text-[#113D48]'>
          Top Destination
        </p>
        <h2 className='text-[48px] leading-[63.7px] font-bold text-[#113D48]'>
          Popular Destination
        </h2>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className='w-full'
      >
        {destinations.map((item, index) => (
          <SwiperSlide
            key={index}
            className='!w-[432px] !h-[636px] rounded-2xl overflow-hidden'
          >
            <div
              className='relative w-full h-full flex flex-col justify-end p-4 text-white'
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='relative z-10 flex items-center justify-around'>
                <div>
                  <h3 className='text-2xl font-bold'>{item.name}</h3>
                  <p className='text-base mb-3'>{item.listings} Listings</p>
                </div>
                <Link className='px-8 py-3 rounded-full text-base bg-white/40 text-white border border-white'>
                  View All
                  <img
                    src='/images/arrow.png'
                    alt='arrow'
                    className='w-4 h-4 '
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationSection;
