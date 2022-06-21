import './navbar.css';
import { NotificationsNone, Language, Settings,Build} from '@material-ui/icons';

export default function Navbar() {

  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><Build className='logoicon'/>Knowledge Base</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
            <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
