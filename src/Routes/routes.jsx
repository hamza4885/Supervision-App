import React , {Suspense ,lazy, Fragment} from 'react'
import { Route , Routes } from 'react-router-dom'
import VideoCall from '../Components/Home/Components/Video/VideoCall';
const LandingPage = lazy(() => import("../Components/LandingPage"));
const SignIn = lazy(()=> import("../Components/Auth/SignIn"))
const SignUp = lazy(()=> import("../Components/Auth/SignUp"))
const Main1 = lazy(()=>import("../Components/SignUp Components/description"))
export default function routes() {
  return (
    <Suspense fallback={<div>loading Supervision App...</div>}>  
          <Fragment>
            <Routes>
                <Route path="/" element={<LandingPage />}  />

                <Route path="/call" element={<VideoCall />}  />

                <Route path='/SignIn' element={<SignIn />}/>
                <Route path='/SignUp' element={<SignUp />}/>
            </Routes>
         </Fragment>
      </Suspense>  
  )
}
