import TranseActionForm from "../components/TransActionForm";
const OverViewComponent = ({
  income,
  expense,
  isShow,
  addTranseAction,
  setIsShow,
}) => {
  return (
    <div>
      <header className="header-app">
        <div className="balance">
          <p>Balance : {income - expense}</p>
        </div>
      </header>
      {isShow && (
        <TranseActionForm
          setIsShow={setIsShow}
          addTranseAction={addTranseAction}
        />
      )}
      <div className="expense-income-container">
        <div className="expense-box">
          expense $<div className="expense">{expense}</div>
        </div>
        <div className="income-box">
          income $<div className="income">{income}</div>
        </div>
      </div>
    </div>
  );
};

export default OverViewComponent;
