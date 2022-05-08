const TranseActionList = ({ transActions }) => {
  return (
    <section>
      {transActions.map((t) => (
        <div
          className="traseAction-list"
          style={{ borderLeft: t.type === "expense" && "8px solid red" }}
          key={t.id}
        >
          <span> {t.desc}</span>
          <span>{t.amount}$</span>
        </div>
      ))}
    </section>
  );
};

export default TranseActionList;
