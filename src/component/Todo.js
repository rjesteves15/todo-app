import './todo.scss';
import { data } from "../data";

function Todo() {

  return (
    <>
    <div className="taskContainer">
        {data.map((val) => {
          return (
            <div className="list" key={val.id}>
              <div className="taskInfo" >
                <h3>{val.task}</h3>
                <p>{val.location}</p>
                <button> Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
