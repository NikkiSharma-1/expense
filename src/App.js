import { useEffect } from "react";
import { Route,Switch } from "react-router-dom";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";
import Expense from "./Expenses/Expense";
import Profile from "./Profile/Profile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { expenseActions } from "./Store/expense.slice";
import ResetPassword from "./ResetPassword/ResetPassword";


function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.darkMode);
  const email = useSelector((state) => state.expense.email);
  
  

  useEffect(() => {
    if (!email) return;
    console.log("before fetch", email);
    fetch(
      `https://expense-118bb-default-rtdb.firebaseio.com/${email}.json`,
      {
        method: "GET"
      }
    )
      .then(async (res) => {
        const data = await res.json();
        console.log("In app js", data);
        for (const key in data) {
          const item = data[key];
          item.id = key;
          dispatch(expenseActions.addExpense(item));
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, [dispatch, email]);

  return (
    <main
      style={
        
        theme
          ? { backgroundColor: "black", color: "red" }
          : { backgroundColor: "white" }
      }
    >
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        
        <Route path="/passwdreset">
          <ResetPassword />
        </Route>

        <Route path="/expense">
          <Expense />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
