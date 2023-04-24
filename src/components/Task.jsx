import { MdOutlineDeleteOutline } from 'react-icons/md';
import { AiOutlineCarryOut, AiOutlineEdit } from 'react-icons/ai';
// import { AiOutlineCheckCircle } from 'react-icons/ai';

const Task = ({ task, index, deleteTask }) => {
  return (
    <div className='task'>
      <p>
        <b>{index + 1}. </b> {task.name}
      </p>

      <div className='task-icons'>
        <AiOutlineCarryOut color='green' />
        <AiOutlineEdit />
        <MdOutlineDeleteOutline //
          color='red'
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
