import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  );
}

export default App;