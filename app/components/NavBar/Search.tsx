'use client'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div
      className='
      w-full 
      cursor-pointer 
      rounded-full 
      border-[1px] 
      py-2 
      shadow-sm 
      transition 
      hover:shadow-md 
      md:w-auto
      '
    >
      <div className='flex items-center justify-between'>
        <div className='px-6 text-sm font-semibold'>anywhere</div>
        <div
          className='hidden flex-1 border-x-[1px]   px-6 text-center text-sm font-semibold sm:block
        
        '
        >
          any Week
        </div>
        <div className='flex items-center gap-3 pl-6 pr-2  text-sm text-gray-600'>
          <div className='hidden sm:block'>Add Guests</div>
          <div
            className='
          rounded-full
        bg-red-500
          p-2
        text-white
          '
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
