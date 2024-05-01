import React , {Suspense ,lazy, Fragment} from 'react'
import { Route , Routes ,Navigate  } from 'react-router-dom'
import VideoCall from '../../Components/Home/Components/Video/VideoCall';
import DummyChatApp from '../../Components/Chat/chat';
const Home = lazy(() => import("../../Components/Home/Home"));
export default function routess() {
  return (
    
    <Suspense fallback={<div>loading Supervision App...</div>}>  
    <Fragment>
      <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/call" element={<VideoCall />}  />
          <Route path="/chat" element={<DummyChatApp />}  />

          <Route path="/SignIn" element={<Navigate to="/"  replace/>} />
      </Routes>
    </Fragment>
    </Suspense> 

    
  )
}
