import Link from '../components/Button/Links';

const PlanSection = () => {
  return (
    <div className='flex items-center justify-around '>
      <div className='flex'>
        <div className='-mt-[180%]'>
          <img src='/images/shape_1.png' alt='shape_1' />
        </div>
        <div className='-mt-[140%]'>
          <img src='/images/shape_2.png' alt='shape_2' />
        </div>
        <div className='-mt-[170%] ml-[30px]'>
          <img src='/images/shape_3.png' alt='shape_3' />
        </div>
      </div>

      <div className='flex gap-10'>
        <div className='flex gap-5'>
          <div>
            <img src='/images/about_1_1.png' alt='about_1_1' />
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <img src='/images/about_1_2.png' alt='about_1_2' />
            </div>
            <div>
              <img src='/images/about_1_3.png' alt='about_1_3' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <div>
            <p className='text-[40px] leading-10 font-[Montez] text-[#113D48]'>
              Let’s Go Together
            </p>
            <h2 className='w-full max-w-[314.43px] text-[48px] leading-[63.7px] font-bold text-[#113D48]'>
              Plan Your Trip With us
            </h2>
          </div>

          <div>
            <p className='w-full max-w-[497.29px]'>
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected hum
              randomised words which don’t look even slightly.
            </p>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex gap-4'>
              <div>
                <img
                  src='/images/exclusive.png'
                  alt='exclusive'
                  className='w-[72px] h-[72px]'
                />
              </div>
              <div>
                <h3 className='text-2xl font-semibold'>Exclusive Trip</h3>
                <p className='w-full max-w-[293.64px] text-[#6E7070]'>
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div>
                <img
                  src='/images/professional.png'
                  alt='professional'
                  className='w-[72px] h-[72px]'
                />
              </div>
              <div>
                <h3 className='text-2xl font-semibold'>Professional Guide</h3>
                <p className='w-full max-w-[293.64px] text-[#6E7070]'>
                  There are many variations of passages of available but the
                  majority.
                </p>
              </div>
            </div>

            <Link className='w-fit rounded-full bg-[#113D48] text-white px-6 py-3 hover:bg-[#3e5b62]'>
              Learn More <img src='/images/arrow.png' alt='arrow' />
            </Link>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='relative top-[184px] left-[-25%]'>
          <img src='/images/background-shape.png' alt='shape' />
        </div>
        <div className='z-20 absolute bottom-[-242%]'>
          <img src='/images/about-slide-img.png' alt='about slide' />
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
