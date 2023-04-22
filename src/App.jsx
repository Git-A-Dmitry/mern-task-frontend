import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='task-container'>
          <TaskList />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
