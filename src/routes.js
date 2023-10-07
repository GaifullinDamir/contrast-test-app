import StartPage from "./pages/StartPage/StartPage";
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import NotFound from "./pages/NotFound/NotFound";
import { START_PAGE, TEST_PAGE, RESULT_PAGE, NOT_FOUND } from "./utils/consts";

export const routes = [
    {
        path: START_PAGE,
        Component: StartPage
    },
    {
        path: TEST_PAGE,
        Component: TestPage
    },
    {
        path: RESULT_PAGE,
        Component: ResultPage
    },
    {
        path: NOT_FOUND,
        Component: NotFound
    }
];