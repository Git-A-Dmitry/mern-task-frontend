import { MdOutlineDeleteOutline } from 'react-icons/md';
import { AiOutlineCarryOut, AiOutlineEdit } from 'react-icons/ai';
// import { AiOutlineCheckCircle } from 'react-icons/ai';

const Task = () => {
  return (
    <div className='task'>
      <p>
        <b>1.</b> Task 1
      </p>

      <div className='task-icons'>
        <AiOutlineCarryOut color='green' />
        <AiOutlineEdit />
        <MdOutlineDeleteOutline color='red' />
      </div>
    </div>
  );
};

export default Task;
