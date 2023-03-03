import { useState } from "react";
import TaskAdd from "../components/TaskAdd";
import TaskList from "../components/TaskList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState("");
  const [showTask, setShowTask] = useState([]);
  const [form, setForm] = useState(false);

  const notify = () => toast("Task Add Successfully!");
  const error = () => toast("Fill All the Fields");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!task || !date) {
      error();
      return;
    }
    notify();
    setShowTask((tasks) => [
      ...tasks,
      { id: new Date().getTime(), task, date },
    ]);
    setTask("");
    setDate("");
  };
  return (
    <div>
      <TaskAdd
        date={date}
        task={task}
        setTask={setTask}
        setDate={setDate}
        submitHandler={submitHandler}
        setForm={setForm}
        form={form}
      />

      {showTask.length ? (
        <TaskList showTask={showTask} setShowTask={setShowTask} />
      ) : null}
    </div>
  );
};

export default Home;
