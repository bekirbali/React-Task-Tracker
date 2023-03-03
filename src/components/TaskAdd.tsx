import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskAdd = ({
  setTask,
  setDate,
  date,
  task,
  submitHandler,
  setForm,
  form,
}) => {
  const formHandler = () => {
    setForm(!form);
  };

  return (
    <div className="flex flex-col items-center ">
      <div>
        <ToastContainer position="top-center" theme="light" autoClose={3000} />
      </div>
      <button
        className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md my-2"
        onClick={formHandler}
      >
        {form ? "Close" : "Add Task"}
      </button>
      {form && (
        <form className="flex flex-col text-black" onSubmit={submitHandler}>
          <label className="my-2 text-white" htmlFor="task">
            Task
          </label>
          <input
            className="rounded-md py-1 px-2"
            type="text"
            id="task"
            name="task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <label className="my-2 text-white" htmlFor="date">
            Day & Time
          </label>
          <input
            className="rounded-md py-1 px-2"
            type="datetime-local"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white font-bold py-2 px-4 rounded-md my-2">
            Save Task
          </button>
        </form>
      )}
    </div>
  );
};

export default TaskAdd;
