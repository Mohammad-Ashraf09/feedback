import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import FrontPage from './FrontPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<FrontPage/>} />
          <Route exact path='/about' element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;