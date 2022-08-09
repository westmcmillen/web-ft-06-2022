const Student = props => {
  return (
    <>
      <h2 key={props.student}>{props.student}</h2>
      <button onClick={() => console.log(props.student)}>Click Me</button>
    </>
  );
};

export default Student;
