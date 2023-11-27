import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import AddNewSoldier from './Pages/AddNewSoldier';
import SubmitSoldierScore from './Pages/SubmitSoldierScore';
import AddCourse from './Pages/AddCourse';
import Login from './Pages/Login';
import Main from './Views/Main';

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
        <Route
          path={'/login'}
          element={ <Login /> }
        />
        <Route
          path={'/main'}
          element={ <Main /> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
