// Q6.1

// Fix the issue in the following React component that doesn't update correctly when new tasks are received:
function TaskList({ tasks }) {
    useEffect(() => {
        console.log("Tasks updated");
        setFilteredTasks(tasks.filter(task => task.completed));
    }
    ,[tasks])
  const [filteredTasks, setFilteredTasks] = useState(tasks.filter(task => task.completed));
  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}

// Q6.2
function ExpensiveComponent({ numbers }) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return <div>{sortedNumbers.join(", ")}</div>;
  }
  // This will avoid unnecessary re renders for this component
const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);
  