import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  ListAlt,
  Close,
  Settings,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Accueil
            </li>
            </Link>
            <Link to="/analytique" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytiques
            </li>
            </Link>
            <Link to="/interventionlist" className="link">
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcon" />
              Interventions
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Structure</h3>
          <ul className="sidebarList">
          <Link to="/lignes" className="link" >
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcon" />  
             Ligne
            </li>
        </Link>
        <Link to="/equipement" className="link" >
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcon" />
             Equipement
            </li>
        </Link>
        <Link to="/products" className="link">
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcon" />
              Articles
            </li>
            </Link>

            <Link to="/users" className="link">
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcon" />
              Techniciens
            </li>
            </Link>
          </ul>
        </div>  
    
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Autres </h3>
          <ul className="sidebarList">
          <Link to="/parametres" className="link">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Parametres
            </li>
            </Link>
            <Link to="/deconnection" className="link">
             <li className="sidebarListItem">
              <Close className="sidebarIcon" />
              Deconnection
             </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
