import { AlarmSmoke } from 'lucide-react';

function Card() {
  return (
    <div className='border border-purple-500 inset-0 p-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className="grid grid-cols-6 place-items-between items-center">
          <p className='col-span-1'><AlarmSmoke color="white" /></p>
          <div className="col-span-4">
          <p className='text-white text-sm leading-4'>Air quality is currently good, with no significant pollutants detected.</p>
          </div>
        </div>
    </div>
  )
}

export default Card
