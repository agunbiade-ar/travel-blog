import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid';

export function HeaderComponent({ text }) {
  return (
    <header className='flex bg-orange-700 py-4 rounded-lg'>
      <GlobeEuropeAfricaIcon className='h-10 w-10 text-white' />
      <h1 className='text-white'>{text}</h1>
    </header>
  );
}
