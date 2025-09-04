import { Image } from 'antd';

const GallerySection = () => {
  return (
    <section className=' w-full  flex items-center justify-center flex-col mt-8'>
      <div className='text-center'>
        <p className='text-[40px] leading-10 font-[Montez] text-[#113D48] '>
          Make Your Tour More Pleasure
        </p>
        <h1 className='font-bold text-[48px] leading-[94.4px] text-[#113D48]'>
          Recent Gallery
        </h1>
      </div>
      <div className='flex w-full pl-[50px]'>
        <div className='mt-[70px] w-full max-w-[85px] aspect-[85/52]'>
          <img
            src='/images/plane.png'
            alt='plane'
            className='w-full'
            loading='lazy'
          />
        </div>
        <div className=' flex gap-[5px] items-center p-10'>
          <div className='w-full max-w-[281.83px] aspect-[281.83/264.34]'>
            <Image
              src='/images/gallery_1_1.png'
              alt='image 1'
              loading='lazy'
              className='w-full object-cover h-full'
            />
          </div>
          <div className='flex flex-col gap-[5px]'>
            <Image
              src='/images/gallery_1_2.png'
              alt='image 2'
              loading='lazy'
              className='w-[281.83px] h-[218.09px] object-cover '
            />
            <Image
              src='/images/gallery_1_3.png'
              alt='image 3'
              loading='lazy'
              className='w-[281.83px] h-[218.09px] object-cover '
            />
          </div>
          <div className='w-full max-w-[281.83px] aspect-[281.83/455.17] '>
            <Image
              src='/images/gallery_1_4.png'
              alt='image 4'
              loading='lazy'
              className='w-full object-cover h-full'
            />
          </div>
          <div className='flex flex-col gap-[5px]'>
            <Image
              src='/images/gallery_1_5.png'
              alt='image 5'
              loading='lazy'
              className='w-[281.83px] h-[218.09px] object-cover '
            />
            <Image
              src='/images/gallery_1_6.png'
              alt='image 6'
              loading='lazy'
              className='w-[281.83px] h-[218.09px] object-cover '
            />
          </div>
          <div className='w-full max-w-[281.83px] aspect-[281.83/264.34]'>
            <Image
              src='/images/gallery_1_7.png'
              alt='image 7'
              loading='lazy'
              className='w-full object-cover h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
