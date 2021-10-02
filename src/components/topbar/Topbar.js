import React from 'react';
import "./topbar.css";
import {Search,Person,Chat,Notifications} from '@mui/icons-material';

const Topbar = () => {
    return (
        <>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">
                    SocialApp
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search/>
                    <input type="search" placeholder="Search for friends ,post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <spna className="topbarLink">Homepage</spna>
                    <spna className="topbarLink">Timeline</spna>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">4</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
        </>
    );
};

export default Topbar;