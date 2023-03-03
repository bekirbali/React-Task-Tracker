import TaskAdd from "../components/TaskAdd";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <TaskAdd />
      <TaskList />
    </div>
  );
};

export default Home;
