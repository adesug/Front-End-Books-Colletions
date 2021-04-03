import { BrowserRouter,Switch,Route } from "react-router-dom";
import './App.css';
import HomeNolog from "./pages/HomeNolog";
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from "./pages/SignUp";
import BookDescription from "./pages/BookDescription";
import Borrow from "./pages/Borrow";
import WaitingBorrow from "./pages/WaitingBorrow";
import Profile from "./pages/Profile";
import Outofdate from "./pages/Outofdate";
import Books from "./pages/Books";
import Waiting from "./pages/Waiting";
import DetailCategory from "./pages/DetailCategory";
import UploadBooks from "./pages/UploadBooks";
import WaitingDetail from "./pages/WaitingDetail";
import BookDescNolog from "./pages/BookDescNolog";
import DetailCategoryNolog from "./pages/DetailCategoryNolog";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeNolog}/>
      <Route path="/login" component={Login}/>
      <Route  path="/home" component={Home}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/bookdesc" component={BookDescription}/>
      <Route path="/borrow" component={Borrow}/>
      <Route path="/waitingborrow" component={WaitingBorrow}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/outofdate" component={Outofdate}/>
      <Route path="/books" component={Books}/>
      <Route path="/waiting" component={Waiting}/>
      <Route path="/detailcategory" component={DetailCategory}/>
      <Route path="/uploadbook" component={UploadBooks}/>
      <Route path="/waitingdetail" component={WaitingDetail}/>
      <Route path="/bookdescnolog" component={BookDescNolog}/>
      <Route path="/detailcategorynolog" component={DetailCategoryNolog}/>
      



    </Switch>
    </BrowserRouter>
  );
}

export default App;
