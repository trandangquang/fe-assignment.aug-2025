import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/TourGuideSection.css';

type Destination = {
  name: string;
  position: string;
  image: string;
  icons: string[];
};

const destinations: Destination[] = [
  {
    name: 'Jane Cooper',
    position: 'Tourist Guide',
    image: '/images/team_1_2.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Guy Hawkins',
    position: 'Tourist Guide',
    image: '/images/team_1_3.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Jenny Wilson',
    position: 'Tourist Guide',
    image: '/images/team_1_4.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Jacob Jones',
    position: 'Tourist Guide',
    image: '/images/team_1_5.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },

  {
    name: 'Jane Cooper',
    position: 'Tourist Guide',
    image: '/images/team_1_2.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Guy Hawkins',
    position: 'Tourist Guide',
    image: '/images/team_1_3.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Jenny Wilson',
    position: 'Tourist Guide',
    image: '/images/team_1_4.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Jacob Jones',
    position: 'Tourist Guide',
    image: '/images/team_1_5.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Jane Cooper',
    position: 'Tourist Guide',
    image: '/images/team_1_2.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Guy Hawkins',
    position: 'Tourist Guide',
    image: '/images/team_1_3.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
  {
    name: 'Jenny Wilson',
    position: 'Tourist Guide',
    image: '/images/team_1_4.png',
    icons: [
      '/images/facebook.png',
      '/images/twitter.png',
      '/images/instagram.png',
      '/images/youtube.png',
    ],
  },
];

const TourGuideSection = () => {
  return (
    <section className='py-16 w-full bg-[#E9F6F9] h-[854px]'>
      <div className='max-w-[1344px] mx-auto px-4'>
        <div className='mt-5 text-center '>
          <h2 className='text-[40px] leading-10 font-[Montez] text-[#113D48]'>
            Meet with Guide
          </h2>
          <h2 className='text-[48px] leading-[63.7px] font-bold text-[#113D48]'>
            Tour Guide
          </h2>
        </div>

        <div className='tour-guide mt-10'>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='!h-[570.33px]'
          >
            {destinations.map((item, index) => (
              <SwiperSlide
                key={index}
                className=' !w-[312px] !h-[390px] flex flex-col !justify-start'
              >
                <div className=' flex flex-col items-center w-full bg-[#E9F6F9]'>
                  <div className='w-full max-w-[194px] aspect-square relative top-[80px]'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className=' w-full object-cover h-full rounded-full'
                    />
                  </div>
                  <div className='p-4 text-center items-center flex flex-col justify-between !h-[290px] bg-white rounded-2xl '>
                    <div className='flex flex-col gap-2 mt-[110px] items-center'>
                      <div className='w-[280px] h-[144.33px] bg-[#E9F6F9] rounded-2xl px-6 py-3'>
                        <h3 className='text-[24px] leading-[34px] text-[#0D0D0C] font-semibold'>
                          {item.name}
                        </h3>
                        <h4 className='text-[16px] leading-[26px] text-[#0D0D0C]'>
                          {item.position}
                        </h4>
                        <div className='flex gap-2 justify-center mt-5'>
                          {item.icons.map((icon, i) => (
                            <img
                              key={i}
                              src={icon}
                              alt={`${item.name}-icon-${i}`}
                              className='w-8 h-8'
                              loading='lazy'
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TourGuideSection;
