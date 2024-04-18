import profile from '../../../public/images/profile.png'

function Header() {
  return (
    <div className='flex justify-between items-center pb-2 border-b-2'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  )
}

export default Header