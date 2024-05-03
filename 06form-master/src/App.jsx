
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import Form from './components/Form/Form'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('Sign up data,', data);
  }

  const handleUpdateProfile = data => {
    console.log('Updated profile data,', data);
  }

  return (
    <>
      <h1 className='font-bold'>Form Master</h1>
      {/* <Form /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      <ReusableForm
        formTitle={'Sign up'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h1 className='text-3xl font-semibold my-4'>Sign Up</h1>
          <h3>Please Sign Up Now!</h3>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Update Profile'}
        handleSubmit={handleUpdateProfile}
        submitBtnText={'Update'}>
        <div>
          <h1 className='text-3xl font-semibold my-4'>Update Profile</h1>
          <i>Always keep your profile updated</i>
        </div>
      </ReusableForm>

    </>
  )
}

export default App
