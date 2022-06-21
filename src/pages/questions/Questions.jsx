import Qtable from '../../components/Qtable/Qtable';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import './questions.css';
export default function Questions() {
  return (
    <div className='feedbackCont'>
      <Sidebar />
      <Qtable />
    </div>
  );
}
