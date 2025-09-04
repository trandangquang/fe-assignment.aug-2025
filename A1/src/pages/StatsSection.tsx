const StatsSection = () => {
  return (
    <section className='w-full flex justify-around items-center h-[600px] px-[60px]'>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex'>
          <div>
            <img src='/images/shape_1.png' alt='shape_1' />
          </div>
          <div className='mt-[60px]'>
            <img src='/images/shape_2.png' alt='shape_2' />
          </div>
          <div className='mt-[10px] pl-[20px]'>
            <img src='/images/shape_3.png' alt='shape_3' />
          </div>
        </div>

        <div>
          <img src='/images/tree.png' alt='tree' />
        </div>
      </div>

      <div className='flex gap-5 w-full '>
        <div
          style={{ backgroundImage: "url('/images/stats-1.png')" }}
          className='w-full max-w-[312px] aspect-square flex items-center justify-center mt-[10%] bg-center bg-cover h-full'
        >
          <div className='w-[264px] h-[264px] rounded-full bg-[#E9F6F9] flex flex-col items-center justify-center'>
            <h2 className='font-bold text-[48px] leading-[48px]'>12</h2>
            <h3 className='text-[24px] leading-[36px] text-[#0D0D0C] font-medium'>
              Years Experience
            </h3>
          </div>
        </div>

        <div
          style={{ backgroundImage: "url('/images/stats-2.png')" }}
          className='w-full max-w-[312px] aspect-square flex items-center justify-center bg-center bg-cover h-full'
        >
          <div className='w-[264px] h-[264px] rounded-full bg-[#E9F6F9] flex flex-col items-center justify-center'>
            <h2 className='font-bold text-[48px] leading-[48px]'>97%</h2>
            <h3 className='text-[24px] leading-[36px] text-[#0D0D0C] font-medium'>
              Retention Rate
            </h3>
          </div>
        </div>

        <div
          style={{ backgroundImage: "url('/images/stats-3.png')" }}
          className='w-full max-w-[312px] aspect-square flex items-center justify-center mt-[10%] bg-center bg-cover h-full'
        >
          <div className='w-[264px] h-[264px] rounded-full bg-[#E9F6F9] flex flex-col items-center justify-center'>
            <h2 className='font-bold text-[48px] leading-[48px]'>8k</h2>
            <h3 className='text-[24px] leading-[36px] text-[#0D0D0C] font-medium'>
              Tour Completed
            </h3>
          </div>
        </div>

        <div
          style={{ backgroundImage: "url('/images/stats-4.png')" }}
          className='w-full max-w-[312px] aspect-square flex items-center justify-center bg-center bg-cover h-full'
        >
          <div className='w-[264px] h-[264px] rounded-full bg-[#E9F6F9] flex flex-col items-center justify-center'>
            <h2 className='font-bold text-[48px] leading-[48px]'>19k</h2>
            <h3 className='text-[24px] leading-[36px] text-[#0D0D0C] font-medium'>
              Happy Travellers
            </h3>
          </div>
        </div>
      </div>

      <div className='h-full'>
        <img src='/images/anchor.png' alt='anchor' />
      </div>
    </section>
  );
};

export default StatsSection;
