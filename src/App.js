import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import AddNewSoldier from './Pages/AddNewSoldier';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/addnewsoldier'
          element={ <AddNewSoldier/> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
