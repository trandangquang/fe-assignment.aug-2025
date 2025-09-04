import { ChevronRight } from 'lucide-react';
import Link from '../components/Button/Links';

const FooterSection = () => {
  return (
    <footer className='bg-white'>
      <div className='max-w-[1344px] mx-auto px-4 py-12  flex justify-between border-b-1 border-gray-200'>
        <h2 className='text-[40px] font-semibold text-[#113D48] leading-[53px] max-w-[536px]'>
          Get Updated The Latest Newsletter
        </h2>

        <div className='mt-6 flex justify-center'>
          <input
            type='email'
            placeholder='Enter your Email'
            className='w-[400px] px-4 py-2 h-[64px] border border-gray-300 rounded-full outline-none'
          />
          <Link className='ml-4 px-6 py-2 h-[64px] rounded-full bg-[#113D48] hover:bg-[#557982] text-white flex items-center gap-2 cursor-pointer'>
            Subscribe Now
            <div className='w-full max-w-[19px] aspect-square'>
              <img
                src='/images/Vector.png'
                alt='vector'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
          </Link>
        </div>
      </div>

      <div className='max-w-[1344px] mx-auto px-4 py-12 flex justify-between gap-8'>
        <div>
          <div className=' w-full max-w-[197px] aspect-[197/56] '>
            <img
              src='/images/footer-logo.png'
              alt='Tours'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
          <p className='mt-4 text-[#666666] w-full max-w-[310.39px] text-base leading-[28px]'>
            Rapidiously myocardinate cross-platform intellectual capital model.
            Appropriately create interactive infrastructures
          </p>
          <div className='flex gap-3 mt-4'>
            <div className='w-full max-w-8 aspect-square'>
              <img
                src='/images/footer-fb.png'
                alt='facebook'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>

            <div className='w-full max-w-8 aspect-square'>
              <img
                src='/images/footer-twitter.png'
                alt='twitter'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>

            <div className='w-full max-w-8 aspect-square'>
              <img
                src='/images/footer-in.png'
                alt='linkedin'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>

            <div className='w-full max-w-8 aspect-square'>
              <img
                src='/images/footer-ig.png'
                alt='instagram'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className='font-semibold text-[#113D48] text-2xl leading-[24px] mb-4'>
            Quick Links
          </h3>
          <ul className='space-y-2 text-gray-600'>
            <li className=''>
              <a href='#' className='flex gap-2 '>
                <ChevronRight className='w-3' />
                <span className='hover:border-b-1 hover:border-gray-400 text-[#888C97]'>
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='flex gap-2'>
                <ChevronRight className='w-3' />
                <span className='hover:border-b-1 hover:border-gray-400 text-[#888C97]'>
                  About Us
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='flex gap-2'>
                <ChevronRight className='w-3' />
                <span className='hover:border-b-1 hover:border-gray-400 text-[#888C97]'>
                  Services
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='flex gap-2'>
                <ChevronRight className='w-3' />
                <span className='hover:border-b-1 hover:border-gray-400 text-[#888C97]'>
                  Tour Guide
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='flex gap-2'>
                <ChevronRight className='w-3' />
                <span className='hover:border-b-1 hover:border-gray-400 text-[#888C97]'>
                  Contact Us
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-[#113D48] text-2xl leading-[24px] mb-4'>
            Get In Touch
          </h3>
          <ul className='space-y-3 '>
            <li className='flex items-center gap-5 text-[#6E7070] text-base leading-[28px]'>
              <div className='w-full max-w-10 aspect-square'>
                <img
                  src='/images/footer-phone.png'
                  alt='phone'
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
              <div>
                <div> +01 234 567 890</div>
                <div>+09 999 999 999</div>
              </div>
            </li>

            <li className='flex items-center gap-5 text-[#6E7070] text-base leading-[28px]'>
              <div className='w-full max-w-10 aspect-square'>
                <img
                  src='/images/footer-mail.png'
                  alt='mail'
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
              <div>
                <div>mailinfo00@tours.com</div>
                <div>support24@tours.com</div>
              </div>
            </li>

            <li className='flex items-center gap-5 text-[#6E7070] text-base leading-[28px]'>
              <div className='w-full max-w-10 aspect-square'>
                <img
                  src='/images/footer-location.png'
                  alt='location'
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
              <div>
                <div>789 Inner Lane, Holy park</div>
                <div>California, USA</div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-[#113D48] text-2xl leading-[24px] mb-4'>
            Instagram Post
          </h3>
          <div className='grid grid-cols-3 gap-2'>
            <div className='w-full max-w-[96px] aspect-square'>
              <img
                src='/images/footer-img-1.png'
                alt='insta1'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
            <div className='w-full max-w-[96px] aspect-square'>
              <img
                src='/images/footer-img-2.png'
                alt='insta2'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
            <div className='w-full max-w-[96px] aspect-square'>
              <img
                src='/images/footer-img-3.png'
                alt='insta3'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
            <div className='w-full max-w-[96px] aspect-square'>
              <img
                src='/images/footer-img-4.png'
                alt='insta4'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
            <div className='w-full max-w-[96px] aspect-square'>
              <img
                src='/images/footer-img-5.png'
                alt='insta5'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
            <div className='w-full max-w-[96px] aspect-square'>
              <img
                src='/images/footer-img-6.png'
                alt='insta6'
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#113D48] text-white py-4'>
        <div className='max-w-[1344px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm'>
          <p>
            Copyright 2025 <a href='#'>Tours</a>. All Rights Reserved.
          </p>
          <div className='flex items-center gap-3 mt-2 md:mt-0'>
            <span>We Accept</span>
            <div className='w-full max-w-[224px] aspect-[224/32]'>
              <img
                src='/images/cards.png'
                alt='visa'
                className='h-full w-full object-cover'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
