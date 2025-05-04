import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainLayout from "./layouts/MainLayout";
import MyProgress from "./pages/MyProgress";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={SignUpPage} />
          <Route path="/" Component={MainLayout}>
            <Route index Component={HomePage} />
            <Route path="/progress" Component={MyProgress} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
