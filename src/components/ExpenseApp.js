import { useEffect, useState } from "react";
import TranseActionList from "./TranseactionList";
import OverViewComponent from "./OverViewComponent";
import {
  BsWhatsapp,
  BsTelephoneOutbound,
  BsGithub,
  BsPlusCircleFill,
  BsXCircleFill,
} from "react-icons/bs";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transActions, setTanseActions] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const addTranseAction = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTanseActions([...transActions, data]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transActions.forEach((t) => {
      t.type === "income"
        ? (inc = inc + parseFloat(t.amount))
        : (exp = exp + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transActions]);

  return (
    <div>
      <header className="container">
        <div className="social-me">
          <span className="social-icon">
            <BsTelephoneOutbound style={{ margin: "10px" }} />
          </span>
          <span className="social-icon">
            <BsWhatsapp style={{ margin: "10px" }} />
          </span>
          <span className="social-icon">
            <BsGithub style={{ margin: "10px" }} />
          </span>
        </div>
        <div>
          <p className="me">sajjad taremi</p>
        </div>
      </header>
      <section className="header-title">
        <h2>Expense tracker</h2>
      </section>

      <section className="container-app">
        <OverViewComponent
          income={income}
          expense={expense}
          isShow={isShow}
          setIsShow={setIsShow}
          addTranseAction={addTranseAction}
        />
        <TranseActionList transActions={transActions} />
      </section>
      <footer>
        <div className="footer-mobile">
          <button
            className="btn-add"
            onClick={() => setIsShow((perevstate) => !perevstate)}
          >
            {isShow ? (
              <BsXCircleFill
                style={{
                  fontSize: "50px",
                  marginBottom: "12px",
                  padding: "8px",
                  backgroundColor: "#ccfbf1",
                  borderRadius: "50%",
                  color: "#991b1b",
                  cursor: "pointer",
                }}
              />
            ) : (
              <BsPlusCircleFill
                style={{
                  fontSize: "50px",
                  marginBottom: "12px",
                  padding: "8px",
                  backgroundColor: "#ccfbf1",
                  borderRadius: "50%",
                  color: "#134e4a",
                  cursor: "pointer",
                }}
              />
            )}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ExpenseApp;
