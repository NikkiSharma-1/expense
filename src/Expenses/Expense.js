import React ,{Fragment} from 'react';
import "./Expense.module.css";

function Expense() {
  return (
    <Fragment>
        <div className={classes.header}>
          <h1> Track Your Expenses</h1>
          <button className={classes.home}>Go to home page</button>
        </div>
        <form className={classes.form}>
          <label className={classes.label}>Expense Amount</label>
          <input
            type="number"
            id="amount"
            required
            className={classes.label}
          />
          <label htmlFor="description" className={classes.label}>
            Expense Description
          </label>
          <input
            type="text"
            id="description"
            required
            className={classes.label}
          />
          <label htmlFor="category" className={classes.label}>
            Choose Category
          </label>
          <select
            name="category"
            id="category"
            className={classes.label}
          >
            <option value="investment">Investment</option>
            <option value="food">Food</option>
            <option value="grocery">Grocery</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <button id="submit">Add expense </button>
        </form>
        <hr></hr>
        <h1> Your Expenses for the month</h1>
        <div className={classes.list}>
          <h3 className={classes.list}>Your Amount </h3>
          <h3 className={classes.list}>Description </h3>
          <h3 className={classes.list}>Category </h3>
        </div>
        <ShowExpense />
        <h2> Total amount </h2>
          <button className={classes.premium}>
            Activate premium
          </button>
         <a id="a1" href="expenses.csv">Download Expenses (.csv file) </a>
      </Fragment>
  )
}

export default Expense