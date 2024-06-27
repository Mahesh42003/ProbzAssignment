import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Days from './TimeFrame/Days'
import Weeks from './TimeFrame/Weeks'
import Months from './TimeFrame/Months'

const App=() => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Days/>}/>
      <Route exact path="/Weeks" element={<Weeks/>}/>
      <Route exact path="/Months" element={<Months/>}/> 
    </Routes>
  </BrowserRouter>
) 
export default App
