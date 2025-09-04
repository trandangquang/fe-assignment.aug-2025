import Link from '../components/Button/Links';

const BlogSection = () => {
  return (
    <section className='w-full bg-[#E9F6F9] py-20'>
      <div className=' max-w-[1344px]  mx-auto'>
        <div>
          <p className='text-[40px] leading-10 font-[Montez] text-[#113D48]'>
            About Us Restaurant
          </p>
          <div className='flex justify-between '>
            <h2 className='text-[48px] leading-[63.7px] font-bold text-[#113D48]'>
              News & Articles From Tourm
            </h2>
            <Link
              href='#'
              className='bg-[#E9F6F9] border-1 border-[#113D48] rounded-full hover:bg-[#d4edf3] text-[#113D48] text-base leading-[26px]'
            >
              See More Articles
              <img src='/images/arrow-black.png' alt='arrow' loading='lazy' />
            </Link>
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='pt-10 flex flex-col gap-5'>
            <div className='w-full max-w-[424px] aspect-[424/350.2]'>
              <img
                src='/images/blog-1.png'
                alt='blog 1'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>

            <div className='flex gap-4 items-center text-[#6E7070] text-[14px] leading-[24px]'>
              <span>Jul 10, 2024</span>
              <div className='w-[1px] h-[14px] bg-[#999999]'></div>
              <span>3 min read</span>
            </div>

            <h3 className='w-full max-w-[424px] text-[#113D48] text-[24px] leading-[34px]'>
              Enrich Your Mind Envision Your Future Education for Success
            </h3>

            <Link
              href='#'
              className='bg-[#E9F6F9] max-w-fit border-1 border-[#113D48] rounded-full hover:bg-[#d4edf3] text-[#113D48] text-base leading-[26px]'
            >
              Read More
              <img src='/images/arrow-black.png' alt='arrow' loading='lazy' />
            </Link>
          </div>

          <div className='pt-10 flex flex-col gap-5'>
            <div className='w-full max-w-[424px] aspect-[424/350.2]'>
              <img
                src='/images/blog-2.png'
                alt='blog 2'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>

            <div className='flex gap-4 items-center text-[#6E7070] text-[14px] leading-[24px]'>
              <span>Jul 10, 2024</span>
              <div className='w-[1px] h-[14px] bg-[#999999]'></div>
              <span>3 min read</span>
            </div>

            <h3 className='w-full max-w-[424px] text-[#113D48] text-[24px] leading-[34px]'>
              Exploring The Green Spaces Of Realar Residence Harmony with
            </h3>

            <Link
              href='#'
              className='bg-[#E9F6F9] max-w-fit border-1 border-[#113D48] rounded-full hover:bg-[#d4edf3] text-[#113D48] text-base leading-[26px]'
            >
              Read More
              <img src='/images/arrow-black.png' alt='arrow' loading='lazy' />
            </Link>
          </div>

          <div className='pt-10 flex flex-col gap-5'>
            <div className='w-full max-w-[424px] aspect-[424/350.2]'>
              <img
                src='/images/blog-3.png'
                alt='blog 3'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>

            <div className='flex gap-4 items-center text-[#6E7070] text-[14px] leading-[24px]'>
              <span>Jul 09, 2024</span>
              <div className='w-[1px] h-[14px] bg-[#999999]'></div>
              <span>3 min read</span>
            </div>

            <h3 className='w-full max-w-[424px] text-[#113D48] text-[24px] leading-[34px]'>
              Living sustainability: A day in the life atrealar residence
            </h3>

            <Link
              href='#'
              className='bg-[#E9F6F9] max-w-fit border-1 border-[#113D48] rounded-full hover:bg-[#d4edf3] text-[#113D48] text-base leading-[26px]'
            >
              Read More
              <img src='/images/arrow-black.png' alt='arrow' loading='lazy' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
