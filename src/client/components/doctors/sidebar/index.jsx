import React,{ Component } from 'react';
import {Link } from 'react-router-dom';
import IMG01 from '../../../assets/images/doctor-thumb-02.jpg';

const DoctorSidebar =()=> {

        return(
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <Link to="#" className="booking-doc-img">
                            <img src={IMG01} alt="User" />
                        </Link>
                        <div className="profile-det-info">
                            <h3>Dr. Darren Elder</h3>
                            
                            <div className="patient-details">
                                <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                   
                        
                    <nav className="dashboard-menu">

                        <ul> 
                            <li>
                                <Link to="/doctor/doctor-dashboard"> 
                                    <i className="fas fa-columns"></i>
                                        <span>Dashboard</span>
                                </Link>
                             </li>
                         </ul>
                         
                         <ul> 
                            <li>
                                <Link to="/doctor/appointments"  activeclassname="active">
                                <i className="fas fa-calendar-check"></i>
                                        <span>Appointments</span> 
                                </Link>
                            </li>
                        </ul> 

                        <ul>
                            <li> 
                              <Link to="/doctor/my-patients">
                                <i className="fas fa-user-injured"></i>
                                        <span>My Patients</span>
                                </Link>
                            </li>
                            </ul> 
                            <ul> 
                                <li>
                                    <Link to="/doctor/schedule-timing">
                                    <i className="fas fa-hourglass-start"></i>
                                            <span>Schedule Timings</span>
                                    </Link>
                                </li>
                              </ul> 
                              <ul> 
                                 <li>
                                    <Link to="/pages/invoice">
                                            <i className="fas fa-file-invoice"></i>
                                            <span>Invoices</span>
                                    </Link>
                                    </li>
                               </ul> 
                               <ul> 
                                <li>
                                    <Link to="/doctor/review">
                                        <i className="fas fa-star"></i>
                                        <span>Reviews</span>
                                    </Link>
                                    </li>
                                </ul> 
                                <ul> 
                                    <li>
                                <Link to="/doctor/chat-doctor">
                                    <i className="fas fa-comments"></i>
                                            <span>Message</span>
                                            <small className="unread-msg">23</small>
                                </Link>
                                </li>
                            </ul>  
                            <ul> 
                                <li>
                            <Link to="/doctor/profile-setting">
                                <i className="fas fa-user-cog"></i>
                                    <span>Profile Settings</span>
                            </Link> 
                            </li>
                            </ul> 
                            <ul> 
                                <li>
                                <Link to="/social-media">
                                <i className="fas fa-share-alt"></i>
                                        <span>Social Media</span>
                                </Link>
                                </li>   
                            </ul> 
                            <ul>
                                <li> 
                                <Link to="/doctor-change-passwword">
                                    <i className="fas fa-lock"></i>
                                        <span>Change Password</span>
                                </Link>
                                </li>
                            </ul> 
                            <ul> 
                                <li>
                                    <Link to="/home" activeclassname="active">
                                            <i className="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                    </Link>
                              </li>
                            </ul> 
                         </nav> 
                  
                </div>
            </div>
        );
    }

export default DoctorSidebar;
   