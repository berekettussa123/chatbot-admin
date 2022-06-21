import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';

import Register from './pages/register/Register';
import Feedback from './pages/feedback/Feedback';
import Analytics from './pages/analytics/Analytics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Single } from './pages/singleFeedback/Single';
import Questions from './pages/questions/Questions';
import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';
const App = () => {
  const { user } = useContext(LoginContext);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={user ? <Analytics /> : <Login />} />
          <Route
            exact
            path="/feedback/:feedback_id"
            element={user ? <Single /> : <Login />}
          />
          <Route path="/analytics" element={user ? <Analytics /> : <Login />} />
          <Route path="/feedback" element={user ? <Feedback /> : <Login />} />
          <Route path="/questions" element={user ? <Questions /> : <Login />} />
          <Route
            path="/questions/:question_id"
            element={user ? <Single /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
