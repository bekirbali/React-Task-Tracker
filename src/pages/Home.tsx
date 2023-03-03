import { useState } from "react";
import TaskAdd from "../components/TaskAdd";
import TaskList from "../components/TaskList";

const Home = () => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState("");
  const [showTask, setShowTask] = useState([]);
  const [form, setForm] = useState(false);

  console.log(task);
  const submitHandler = (e) => {
    e.preventDefault();

    setShowTask((tasks) => [...tasks, { task, date }]);
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

      {showTask.length ? <TaskList showTask={showTask} /> : null}
    </div>
  );
};

export default Home;
