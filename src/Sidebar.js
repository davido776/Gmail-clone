import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar({}) {
    const disptach = useDispatch();
    return (
        <div className="sidebar">
            <Button 
              startIcon={<AddIcon fontSize='large'/>}
               className="sidebar__compose"
               onClick={()=>disptach(openSendMessage())}>
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} selected={true} title="Inbox" number="34"/>
            <SidebarOption Icon={StarIcon} title="Starred" number="34"/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="34"/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number="34"/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number="34"/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number="34"/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number="34"/>
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
               
            </div>
        </div>
    );
}

export default Sidebar;