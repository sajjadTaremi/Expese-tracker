import React, { useState } from "react";

const TranseActionForm = ({ addTranseAction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTranseAction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-text">
        <input
          value={formValues.desc}
          type="text"
          name="desc"
          placeholder="Title..."
          onChange={changeHandler}
        />
      </div>
      <div className="input-number">
        <input
          value={formValues.amount}
          type="number"
          name="amount"
          placeholder="Amout..."
          onChange={changeHandler}
        />
      </div>
      <div>
        <div className="section-input">
          <div className="input-expense">
            <input
              checked={formValues.type === "expense"}
              type="radio"
              value="expense"
              name="type"
              onChange={changeHandler}
            />
            <label>Expense</label>
          </div>
          <div className="input-income">
            <input
              checked={formValues.type === "income"}
              type="radio"
              value="income"
              name="type"
              onChange={changeHandler}
            />
            <label>Income</label>
          </div>
        </div>
        <button className="btn-transaction" type="submit">
          add transection
        </button>
      </div>
    </form>
  );
};

export default TranseActionForm;
