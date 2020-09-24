import React from 'react'
import "./Header.css";
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
function header() {
    return (
        <nav className="header">
          <div className="header__left">
              <IconButton aria-label="Apps">
                   <AppsIcon className="header__leftIcon"/>
              </IconButton>
                <h1 className="header__leftTitle">Sticky Notes</h1>
         </div>
              <div className="header__right">
              <IconButton aria-label="Apps">
                    <SettingsIcon className="header__rightIcon" />
                    </IconButton>
                    <HelpIcon className="header__rightIcon"/>
                    <Avatar className="header__rightAvatar">DK</Avatar>
                  </div>  
        </nav>
    )
}

export default header
