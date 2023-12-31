import React, {useEffect, useState} from 'react';
import { IMG01, IMG02 } from "./img";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Header from "../../patients/dashboard/header"

const VideoCall =(props)=>{

  useEffect(() => {
    document.body.classList.add("call-page");
  
    return () => document.body.classList.remove("call-page");
    }, []);

    return (
      <>
      <Header {...props}/>
        <div className="content">
          <div className="container-fluid">
            <div className="call-wrapper">
              <div className="call-main-row">
                <div className="call-main-wrapper">
                  <div className="call-view">
                    <div className="call-window">
                      <div className="fixed-header">
                        <div className="navbar">
                          <div className="user-details">
                            <div className="float-start user-img">
                              <Link
                                className="avatar avatar-sm me-2"
                                to="/doctor/patient-profile"
                                title="Charlene Reed"
                              >
                                <img
                                  src={IMG02}
                                  alt="User"
                                  className="rounded-circle"
                                />
                                <span className="status online"></span>
                              </Link>
                            </div>
                            <div className="user-info float-start">
                              <Link to="/doctor/patient-profile">
                                <span>Charlene Reed</span>
                              </Link>
                              <span className="last-seen">Online</span>
                            </div>
                          </div>
                          <ul className="nav float-end custom-menu">
                            <li className="nav-item dropdown dropdown-action">
                              <a
                                href="#0"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-cog"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#0" className="dropdown-item">
                                  Settings
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="call-contents">
                        <div className="call-content-wrap">
                          <div className="user-video">
                            <img src={IMG01} alt="User" />
                          </div>
                          <div className="my-video">
                            <ul>
                              <li>
                                <img
                                  src={IMG02}
                                  className="img-fluid"
                                  alt="User"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="call-footer">
                        <div className="call-icons">
                          <span className="call-duration">00:59</span>
                          <ul className="call-items">
                            <li className="call-item">
                              <OverlayTrigger
                                overlay={
                                  <Tooltip id="tooltip1">Enable video</Tooltip>
                                }
                              >
                                <span className="d-inline-block">
                                  <a href="#0">
                                    {" "}
                                    <i className="fas fa-video camera"></i>
                                  </a>
                                </span>
                              </OverlayTrigger>
                            </li>
                            <li className="call-item">
                              <OverlayTrigger
                                overlay={<Tooltip id="tooltip2">Mute</Tooltip>}
                              >
                                <span className="d-inline-block">
                                  <a href="#0">
                                    {" "}
                                    <i className="fa fa-microphone microphone"></i>
                                  </a>
                                </span>
                              </OverlayTrigger>
                            </li>
                            <li className="call-item">
                              <OverlayTrigger
                                overlay={
                                  <Tooltip id="tooltip2">Add User</Tooltip>
                                }
                              >
                                <span className="d-inline-block">
                                  <a href="#0">
                                    {" "}
                                    <i className="fa fa-user-plus"></i>
                                  </a>
                                </span>
                              </OverlayTrigger>
                            </li>
                            <li className="call-item">
                              <OverlayTrigger
                                overlay={
                                  <Tooltip id="tooltip2">Full-screen</Tooltip>
                                }
                              >
                                <span className="d-inline-block ms-1">
                                  <a href="#0">
                                    {" "}
                                    <i className="fas fa-arrows-alt-v full-screen"></i>
                                  </a>
                                </span>
                              </OverlayTrigger>
                            </li>
                          </ul>
                          <div className="end-call">
                            <a href="#0">
                              <i className="material-icons">call_end</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default VideoCall;
