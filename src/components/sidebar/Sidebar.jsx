import './sidebar.css';
import { LineStyle, Timeline,Help, TrendingUp, Assistant } from '@material-ui/icons';
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';

export default function Sidebar({ques}) {
  const {dispatch,error} = useContext(LoginContext)

  const handleLogout =()=>{
    dispatch({ type: "LOGOUT"});
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/analytics" style={{textDecoration:'none' ,color:'inherit'}}>
              <li className="sidebarListItem">
                Analytics <Timeline className="sidebarIcon" />
              </li>
            </Link>
            <Link to="/feedback" style={{textDecoration:'none' ,color:'inherit'}}>
              <li className="sidebarListItem">
                Feedback
                <Assistant className="sidebarIcon" />
              </li>
            </Link>
            <Link to="/questions" style={{textDecoration:'none' ,color:'inherit'}}>
              <li className="sidebarListItem">
                Questions
                <Help className="sidebarIcon" />
              </li>
            </Link>
            <Link to="/login" style={{textDecoration:'none' ,color:'inherit'}}>
              <li className="sidebarListItem" onClick={handleLogout}>
                Logout  
                <LogoutIcon style={{marginLeft:'128px'}} className="sidebarIcon" />
              </li>
            </Link>
          
          </ul>
        </div>
      </div>
    </div>
  );
}
