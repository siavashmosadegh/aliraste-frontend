import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import AddNewSoldier from './Pages/AddNewSoldier';
import SubmitSoldierScore from './Pages/SubmitSoldierScore';
import AddCourse from './Pages/AddCourse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/addnewsoldier'
          element={ <AddNewSoldier/> }
        />
        <Route
          path='/submitsoldierscore'
          element={ <SubmitSoldierScore /> }
        />
        <Route
          path='/addcourse'
          element={ <AddCourse /> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
