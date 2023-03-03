const TaskList = ({ showTask }) => {
  console.log(showTask);
  return (
    <div>
      <ul>
        {showTask?.map((task, index) => {
          return (
            <li
              key={index}
              className="bg-white text-black px-2 py-1 rounded-md my-2"
            >
              <p className="font-bold tracking-wide">{task.task}</p>
              <p className="font-medium">{task.date.split("T").join(" ")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
