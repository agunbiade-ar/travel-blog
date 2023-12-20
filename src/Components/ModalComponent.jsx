export function ModalComponent({
  readMore,
  img,
  title,
  link,
  description,
  location,
  handleClick,
  handleOverlayClick,
}) {
  return (
    <div
      id='myModal'
      className='modal'
      style={{ display: readMore ? 'block' : 'none' }}
      onClick={handleOverlayClick}
    >
      {/* <!-- Modal content --> */}
      <div className='modal-content'>
        <span className='close' onClick={handleClick}>
          &times;
        </span>

        <div className='mx-auto'>
          <aside className='mx-2 p-4 rounded-lg'>
            <h2 className='font-bold title text-center m-2'>
              <a href={link}>
                {title}, {location}
              </a>
            </h2>
            <img
              src={img}
              alt={title}
              className='mx-auto max-w-sm rounded-lg p-4 shadow-md'
            />
          </aside>
          <section className='my-4 px-4 text-center'>
            <div>
              <p className='p-4 text-justify'>{description}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
