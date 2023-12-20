import { useState } from 'react';

import { ModalComponent } from './ModalComponent';

export function MainComponent({
  title,
  img,
  link,
  location,
  start_date,
  end_date,
  description,
}) {
  const [readMore, setReadMore] = useState(false);

  function handleClick(e) {
    setReadMore((readMore) => !readMore);
  }

  function handleOverlayClick(e) {
    if (e.target.classList.contains('modal')) {
      setReadMore(false);
    }
  }

  return (
    <div className='flex flex-col items-center md:flex-row lg:flex-row m-2 my-14 mr-4 lg:shadow-sm'>
      <aside className='lg:w-1/2 m-2 p-4 rounded-lg sm:shadow-sm'>
        <img
          src={img}
          alt={title}
          className='mx-auto max-w-sm lg:shadow-sm rounded-lg'
        />
      </aside>
      <section className='lg:w-1/2 my-4 px-4'>
        <div className='text-center'>
          <h4 className='font-bold title'>
            <a href={link}>
              {title}, {location}
            </a>
          </h4>
          <h6 className='font-thin'>
            {start_date} - {end_date}{' '}
          </h6>
        </div>
        <div>
          <p className='py-4 px-2 text-justify'>
            {description.slice(0, 400) + '...'}
          </p>
          <div className='text-center'>
            <a
              href='#'
              className='inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 btn'
              onClick={handleClick}
            >
              Read more
            </a>
          </div>
        </div>
      </section>
      <ModalComponent
        readMore={readMore}
        title={title}
        img={img}
        location={location}
        link={link}
        description={description}
        handleClick={handleClick}
        handleOverlayClick={handleOverlayClick}
      />
    </div>
  );
}
