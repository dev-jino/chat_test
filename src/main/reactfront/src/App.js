import './App.css';
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatButton from "./ChatButton";
import TestPage from "./TestPage";

function selectData() {
  axios.post('/api/testData', ["가", "나", "다"])
      .then(function (res) {
        console.log(res);
      });
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/*<Route path={'/'} element={<ChatButton />} />*/}
            <Route path={'/'} element={<TestPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
