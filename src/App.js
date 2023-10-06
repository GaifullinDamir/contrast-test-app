import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import StartPage from "./pages/StartPage/StartPage";
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import NotFound from "./pages/NotFound/NotFound";

import AnswerOne from "./components/AnswerOne/AnswerOne";
import AnswerTwo from "./components/AnswerTwo/AnswerTwo";
import QuestionOne from "./components/QuestionOne/QuestionOne";
import QuestionTwo from "./components/QuestionTwo/QuestionTwo";
import TestStageOne from "./components/TestStageOne/TestStageOne";
import TestStageTwo from "./components/TestStageTwo/TestStageTwo";


function App() {

  return (
    <Routes>
      <Route path="/" element={ <StartPage/> }/>
      <Route path="/test">
        <Route index element={ <TestPage/> }/>
      </Route>
      <Route path="/result" element={ <ResultPage/>}/>
      <Route path="/*" element={ <NotFound/> }/>
    </Routes>
  );
}

export default App;
