import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import {BrowserRouter} from "react-router-dom";
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MainPage/>
    </BrowserRouter>
  );
}

export default App;
