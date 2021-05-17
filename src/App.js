import logo from './logo.svg';
import './App.css';
import Start from './start';
import Build from './build'
import ChoseTemplate from './chosetemplate';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import StepOne from './stepone';
import StepTwo from './steptwo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllTips from './allTips';
import StepTwoList from './steptwolist';
import StepThree from './stepthree';
import StepThreeTips from './stepthreetips';
import StepThreeList from './stepthreelist';
import StepFour from './stepfour';
import StepFourTips from './stepfourtips';
import StepFive from './stepfive';
import DoneResume from './doneresume';
import Header from './header';
import Navbar from 'react-bootstrap/Navbar';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  return (
    <Provider store={store}>
      <Navbar>
       <Header />
       </Navbar>
    <Router>


    <Switch>
          
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/build">
            <Build />
          </Route>
          <Route path="/chosetemplate">
            <ChoseTemplate />
          </Route>
          <Route path="/stepone">
            <StepOne />
          </Route>
          <Route path='/alltips'>
            <AllTips />
          </Route>
          <Route path='/steptwo'>
            <StepTwo />
          </Route>
          <Route path='/steptwolist'>
            <StepTwoList />
          </Route>
          <Route path='/stepthreetips'>
            <StepThreeTips />
          </Route>
          <Route path='/stepthree'>
            <StepThree />
          </Route>
          <Route path='/stepthreelist'>
            <StepThreeList />
          </Route>
          <Route path='/stepfourtips'>
            <StepFourTips />
          </Route>
          <Route path='/stepfour'>
            <StepFour />
          </Route>
          <Route path='/stepfive'>
            <StepFive />
          </Route>
          <Route path='/doneresume'>
            <DoneResume />
          </Route>
          
    </Switch>
   
    </Router>
    
    </Provider>
  );
}

export default App;
