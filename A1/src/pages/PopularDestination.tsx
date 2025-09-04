import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from '../components/Button/Links';
import '../styles/PopularDestination.css';
import { Clock4, LocateFixed } from 'lucide-react';

type Destination = {
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
};

const destinations: Destination[] = [
  {
    title: 'Ghorepani Poon Hill Trek',
    location: 'Bhutan, Pokhara',
    price: 569,
    duration: '5 Days',
    image: '/images/tour_box_2.png',
  },
  {
    title: 'Langtang Valley Trekking',
    location: 'Bhutan, India, Pokhara',
    price: 600,
    duration: '6 Days',
    image: '/images/tour_box_3.png',
  },
  {
    title: 'Short Trek around Pokhara',
    location: 'Bhutan, India, Tibet',
    price: 250,
    duration: '6 Days',
    image: '/images/tour_box_4.png',
  },
  {
    title: 'Island Peak Climbing',
    location: 'Nepal, Pokhara, Tibet',
    price: 569,
    duration: '3 Days',
    image: '/images/tour_box_5.png',
  },
  {
    title: 'Ghorepani Poon Hill Trek',
    location: 'Bhutan, Pokhara',
    price: 569,
    duration: '5 Days',
    image: '/images/tour_box_2.png',
  },
  {
    title: 'Langtang Valley Trekking',
    location: 'Bhutan, India, Pokhara',
    price: 600,
    duration: '6 Days',
    image: '/images/tour_box_3.png',
  },
  {
    title: 'Short Trek around Pokhara',
    location: 'Bhutan, India, Tibet',
    price: 250,
    duration: '6 Days',
    image: '/images/tour_box_4.png',
  },
  {
    title: 'Island Peak Climbing',
    location: 'Nepal, Pokhara, Tibet',
    price: 569,
    duration: '3 Days',
    image: '/images/tour_box_5.png',
  },
  {
    title: 'Ghorepani Poon Hill Trek',
    location: 'Bhutan, Pokhara',
    price: 569,
    duration: '5 Days',
    image: '/images/tour_box_2.png',
  },
  {
    title: 'Langtang Valley Trekking',
    location: 'Bhutan, India, Pokhara',
    price: 600,
    duration: '6 Days',
    image: '/images/tour_box_3.png',
  },
  {
    title: 'Short Trek around Pokhara',
    location: 'Bhutan, India, Tibet',
    price: 250,
    duration: '6 Days',
    image: '/images/tour_box_4.png',
  },
];

export default function PopularDestination() {
  return (
    <section className='py-16 '>
      <div className='max-w-[1344px] mx-auto px-4'>
        <div className='mt-[80px] text-center '>
          <h2 className='text-[40px] leading-10 font-[Montez] text-[#113D48]'>
            Best Recommended Places
          </h2>
          <h2 className='text-[48px] leading-[63.7px] font-bold text-[#113D48]'>
            Popular Destination we offer for all
          </h2>
          <div className='w-full flex flex-col justify-center items-center my-5'>
            <p className='w-full max-w-[676.43px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className='popular'>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className=' !h-[607.98px]'
          >
            {destinations.map((item, index) => (
              <SwiperSlide
                key={index}
                className=' !w-[312px] !h-[482.98px] border-1 border-[#6E7070] flex flex-col !justify-start bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition'
              >
                <div className='h-full'>
                  <div className='w-full max-w-[310px] aspect-[310/272.24]'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className=' w-full object-cover h-full'
                    />
                  </div>
                  <div className='p-4 text-left flex flex-col justify-between h-[200px]'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[18px] text-[#0D0D0C]'>
                        {item.title}
                      </h3>
                      <p className=' text-[#6E7070] flex items-center gap-1 '>
                        <LocateFixed className='w-4 h-4' /> {item.location}
                      </p>
                      <p className='text-2xl font-medium text-[#0D0D0C] '>
                        ${item.price.toFixed(2)}
                        <span className='text-base font-normal text-[#6E7070] ml-1'>
                          /Person
                        </span>
                      </p>
                    </div>
                    <div className='flex justify-between items-center text-sm'>
                      <span className='flex items-center gap-1 text-gray-600'>
                        <Clock4 className='w-4 h-4' /> {item.duration}
                      </span>
                      <Link className='px-4 py-2 cursor-pointer rounded-full border-1 border-[#E1E4E5] text-[#113D48] bg-white font-light hover:bg-[#ece9e993] transition'>
                        Book Now
                        <img
                          src='/images/arrow-black.png'
                          alt='arrow'
                          className='w-6 h-6'
                        />
                      </Link>
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
}
