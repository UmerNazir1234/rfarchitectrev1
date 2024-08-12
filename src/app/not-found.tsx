import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col text-center py-12 px-6'>
      <h2 className='mb-3'>Not Found</h2>
      <p className='text-lg mb-4'>Could not find requested resource</p>
      <Link href="/" className='btn btn--primary'>Return Home</Link>
    </div>
  )
}