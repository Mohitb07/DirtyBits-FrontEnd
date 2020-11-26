import CodeEditor from './CodeEditor'
import React from 'react'
import logo from '../static/Logo.jpg';


function Menu() {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <div className = "left menu">
                    <div className = "item">
                        <img src = {logo} alt = "logo"></img>
                        DirtyBits
                    </div>
                </div>
                <a className = "active item">
                    Home
                </a>
                <a className="item">
                    Compete
                </a>
                <a className="item">
                    Practice
                </a>
                <a className="item">
                    Blogs
                </a>
                <div className = "right item">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search ..."></input>
                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>
                <div className = "right menu">
                    <div className = "item">
                        <img src = {logo} alt = "logo"></img>
                        <div className="ui dropdown">
                            <div className="text">Name</div>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                    <div className="item">New</div>
                                    <div className="item">
                                    <span className="description">ctrl + o</span>
                                    Open...
                                    </div>
                                    <div className="item">
                                    <span className="description">ctrl + s</span>
                                    Save as...
                                    </div>
                                    <div className="item">
                                    <span className="description">ctrl + r</span>
                                    Rename
                                    </div>
                                    <div className="item">Make a copy</div>
                                    <div className="item">
                                    <i className="folder icon"></i>
                                    Move to folder
                                    </div>
                                    <div className="item">
                                    <i className="trash icon"></i>
                                    Move to trash
                                    </div>
                                    <div className="divider"></div>
                                    <div className="item">Download As...</div>
                                    <div className="item">
                                    <i className="dropdown icon"></i>
                                    Publish To Web
                                    <div className="menu">
                                        <div className="item">Google Docs</div>
                                        <div className="item">Google Drive</div>
                                        <div className="item">Dropbox</div>
                                        <div className="item">Adobe Creative Cloud</div>
                                        <div className="item">Private FTP</div>
                                        <div className="item">Another Service...</div>
                                    </div>
                                </div>
                                <div className="item">E-mail Collaborators</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="ui two column very relaxed grid">
                    <div className="column" style = {{borderRight: "3px solid grey"}}>

                    </div>
                    <div className="column">
                        <CodeEditor/>
                    </div>
                </div>
                {/* <div className="ui vertical divider">
                    Code
                </div> */}
            </div>
        </div>
    )
}

export default Menu;
