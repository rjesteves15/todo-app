import Todo from './Todo'
import './main.scss';

function Main() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
  return (
    <div className="todoContainer">
      <div>
        <h3 className="todoDate">{today}</h3>
        <input placeholder="Search" type="text" className="searchTodo" />
        <div className="task">
         <Todo />
        </div>
        <div className="addTask">
          <button> ADD </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
