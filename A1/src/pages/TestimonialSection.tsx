import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/TestimonialSection.css';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Angelina Rose',
    role: 'Traveller',
    text: 'Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed',
    image: 'https://i.pravatar.cc/100?img=1',
    rating: 5,
  },
  {
    name: 'Andrew Simon',
    role: 'Traveller',
    text: 'A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.',
    image: 'https://i.pravatar.cc/100?img=2',
    rating: 5,
  },
  {
    name: 'Maria Doe',
    role: 'Traveller',
    text: 'The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors. It incorporates passive design principles',
    image: 'https://i.pravatar.cc/100?img=3',
    rating: 4,
  },
  {
    name: 'Angelina Rose',
    role: 'Traveller',
    text: 'Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed',
    image: 'https://i.pravatar.cc/100?img=1',
    rating: 5,
  },
  {
    name: 'Andrew Simon',
    role: 'Traveller',
    text: 'A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.',
    image: 'https://i.pravatar.cc/100?img=2',
    rating: 5,
  },
  {
    name: 'Maria Doe',
    role: 'Traveller',
    text: 'The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors. It incorporates passive design principles',
    image: 'https://i.pravatar.cc/100?img=3',
    rating: 4,
  },
];

const TestimonialSection = () => {
  return (
    <section className='py-16 flex flex-col items-center w-full'>
      <div className='text-center'>
        <p className='text-[40px] leading-10 font-[Montez] text-[#113D48] '>
          Testimonial
        </p>
        <h1 className='font-bold text-[40px] leading-[94.4px] text-[#113D48]'>
          What Client Say About us
        </h1>
      </div>

      <div className='testimonial'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          className='!h-[560px]'
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className='!w-[699px] !h-[335px] '>
              <div className='bg-sky-50  rounded-xl p-6 shadow hover:shadow-lg transition relative text-start'>
                <div className='flex justify-between items-start gap-4 mb-4'>
                  <div className='flex gap-4'>
                    <img
                      src={t.image}
                      alt={t.name}
                      className='w-12 h-12 rounded-full object-cover'
                    />
                    <div>
                      <h4 className='font-semibold text-gray-800'>{t.name}</h4>
                      <p className='text-sm text-gray-500'>{t.role}</p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex text-yellow-400'>
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className='text-gray-600 mb-6'>“{t.text}”</p>

                <div
                  className={`w-[78px] h-[78px] rounded-full flex items-center justify-center absolute -bottom-10 left-[50%] -translate-x-1/2
                    ${
                      i % 2 !== 0 ? 'bg-[#1CA8CB] text-[#E35734]' : 'bg-white'
                    }`}
                >
                  <div className='w-full max-w-[32px] aspect-square '>
                    <img
                      src={
                        i % 2 !== 0
                          ? '/images/testi-quote-fill.png'
                          : '/images/testi.png'
                      }
                      alt='testi'
                      className='w-full h-full object-cover '
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
