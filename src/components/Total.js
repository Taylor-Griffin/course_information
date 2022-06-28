const Total = ({ total }) => {
  const sum = total.reduce((prev, curr) => prev + curr.exercises, 0);

  return <h3>Total:{sum}</h3>;
};

export default Total;
