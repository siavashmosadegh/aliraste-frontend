import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import AddNewSoldier from './Pages/AddNewSoldier';
import SubmitSoldierScore from './Pages/SubmitSoldierScore';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
