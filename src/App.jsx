import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import TaskList from './components/TaskList';

export const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='task-container'>
          <TaskList />
        </div>
        <ToastContainer //
          position='top-center'
          theme='dark'
          autoClose={3000}
          transition={Zoom}
          pauseOnHover
        />
      </div>
    </>
  );
}

export default App;
