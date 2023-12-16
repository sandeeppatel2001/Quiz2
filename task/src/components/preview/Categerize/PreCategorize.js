import Box from "./Box";

const PreCategorize = (props) => {
  function dragover(ev) {
    console.log("dragover");
    ev.preventDefault();
  }
  // console.log("ddddddd", props.data.items);
  function drag(ev) {
    console.log("drag start");
    ev.dataTransfer.setData("text", ev.target.id);
  }

  return (
    <div className="cat">
      <div className="words wraps">
        {props.data.items.map((v, i) => {
          if (v === "") return "";
          return (
            <p
              id={props.no + " " + i}
              draggable="true"
              onDragStart={drag}
              className="word"
            >
              {v}
            </p>
          );
        })}
      </div>
      <div className="boxcollection wraps">
        {props.data.cat.map((v, i) => {
          if (v === "") return;
          return (
            <Box onDragOver={dragover} data={v} no1={props.no} no2={i}></Box>
          );
        })}
      </div>
    </div>
  );
};
export default PreCategorize;
