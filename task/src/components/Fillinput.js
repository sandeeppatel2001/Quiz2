const Fillinput = (props) => {
  return (
    <div>
      <input checked={true} type="checkbox" className="me-1"></input>
      <input value={props.value} className="select" type="text"></input>
    </div>
  );
};
export default Fillinput;
