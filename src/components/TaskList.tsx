import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskList = ({ showTask, setShowTask }) => {
  const [style, setStyle] = useState(false);
  const dbClickHandler = (id) => {
    showTask.map((item) => item.id === id && setStyle(!style));
  };

  const deleted = () => toast("Task Deleted Successfully!");

  const deleteHandler = (id) => {
    setShowTask(showTask.filter((item) => item.id !== id));
    deleted();
  };

  return (
    <div>
      <ul>
        {showTask?.map((task, index) => {
          return (
            <li
              key={index}
              className={`${
                !style
                  ? "bg-white text-black px-2 py-1 rounded-md my-2 flex items-center justify-between"
                  : "bg-white text-black px-2 py-1 rounded-md my-2 flex items-center justify-between line-through border-l-4 border-red-700"
              }`}
              onDoubleClick={() => dbClickHandler(task.id)}
            >
              <div>
                <p className="font-bold tracking-wide">{task.task}</p>
                <p className="font-medium">{task.date.split("T").join(" ")}</p>
              </div>
              <FaTimes onClick={() => deleteHandler(task.id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
