import { ChevronDown, Clock5, MapPin } from 'lucide-react';
import Link from '../components/Button/Links';

const HeaderSection = () => {
  return (
    <header className='w-full bg-white sticky top-0 left-0 right-0 z-50 '>
      <div className='flex justify-between items-center mx-20 h-[47px]'>
        <div className='flex items-center gap-5'>
          <div className='flex text-[#0D0D0C] text-[14px] leading-[26px] items-center gap-2'>
            <MapPin className='w-[10.5px] h-[13.97px]' /> 45 New Eskaton Road,
            Austria
          </div>
          <div className='w-[1px] h-[14px] bg-[#999999]'></div>
          <div className='flex text-[#0D0D0C] text-[14px] leading-[26px] items-center gap-2'>
            <Clock5 className='w-[10.5px] h-[13.97px]' /> Sun to Friday: 8.00 am
            - 7.00 pm, Austria
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Link
            href='#'
            className='flex gap-1 items-center text-[14px] bg-white text-[#0D0D0C] leading-4 border-1 border-[#E1E4E5] rounded-xl px-2 py-1 cursor-pointer'
          >
            Language <ChevronDown className='w-3 h-3' />
          </Link>

          <div className='flex items-center gap-2 text-[14px] leading-4 text-[#0D0D0C] cursor-pointer'>
            <Link className='text-[14px] bg-white text-[#0D0D0C] leading-[26px] '>
              Faq
            </Link>
            <div className='w-[1px] h-[14px] bg-[#999999]'></div>
            <Link className='text-[14px] bg-white text-[#0D0D0C] leading-[26px] '>
              Support
            </Link>
            <div className='w-[1px] h-[14px] bg-[#999999]'></div>
            <Link className='flex items-center gap-1 text-[14px] bg-white text-[#0D0D0C] leading-[26px] '>
              Sign in / Register <ChevronDown className='w-3 h-3' />
            </Link>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between w-full border-t-[1px] border-[#999999]'>
        <div className='flex items-center w-full'>
          <div
            className='w-full max-w-[364.8px] aspect-[364.8/92] bg-center bg-cover flex items-center justify-center shrink-0'
            style={{ backgroundImage: "url('/images/mask-group.png')" }}
          >
            <div className=' w-full max-w-[197px] aspect-[197/56]'>
              <a href='#'>
                <img
                  src='/images/logo.png'
                  alt='logo'
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </a>
            </div>
          </div>

          <div className='w-full'>
            <ul className='flex items-center gap-3 w-full'>
              <li className='flex items-center '>
                <Link
                  href='#'
                  className='bg-white leading-[26px] text-base gap-[1px]'
                >
                  Home <ChevronDown className='w-[11px] h-[26px] ' />
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='bg-white leading-[26px] text-base gap-[1px]'
                >
                  About Us
                </Link>
              </li>
              <li className='flex items-center gap-1'>
                <Link
                  href='#'
                  className='bg-white leading-[26px] text-base gap-[1px]'
                >
                  Destinations
                  <ChevronDown className='w-[11px] h-[26px]' />
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='bg-white leading-[26px] text-base gap-[1px]'
                >
                  Services
                </Link>
              </li>
              <li className='flex items-center gap-1'>
                <Link
                  href='#'
                  className='bg-white leading-[26px] text-base gap-[1px]'
                >
                  Trip <ChevronDown className='w-[11px] h-[26px]' />
                </Link>
              </li>
              <li className='flex items-center gap-1'>
                <Link
                  href='#'
                  className='bg-white leading-[26px] text-base gap-[1px]'
                >
                  Page <ChevronDown className='w-[11px] h-[26px]' />
                </Link>
              </li>
              <li className='flex items-center gap-1'>
                <Link
                  className='bg-white leading-[26px] text-base gap-[1px]'
                  href='#'
                >
                  Blog <ChevronDown className='w-[11px] h-[26px]' />
                </Link>
              </li>
              <li>
                <Link className='bg-white' href='#'>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='shrink-0 mr-20'>
          <Link
            className='cursor-pointer bg-[#113D48] text-white px-4 py-2 rounded-full hover:bg-[#1CA8CB]'
            href='#'
          >
            Request a quote <img src='/images/arrow.png' alt='arrow' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
