import React, { Component } from 'react';
import DoctorSidebar from '../sidebar';
import { Link } from 'react-router-dom';
import {Tab, Tabs } from 'react-bootstrap';
import ProgressBar from 'react-customizable-progressbar';
import StickyBox from "react-sticky-box";
import { Icon01, Icon02, Icon03, IMG01, IMG02, IMG03, IMG04, IMG05, IMG06,patient,patient1,patient2,patient9,patient10,patient11} from './img';
import Header from '../../header';
import Footer from '../../footer';

const DoctorDashboard =(props)=> {

let pathnames = window.location.pathname

return(
	
<div>
   <Header {...props}/>
   <div className="breadcrumb-bar">
      <div className="container-fluid">
         <div className="row align-items-center">
            <div className="col-md-12 col-12">
               <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item">
                        <Link to="/home">
                        Home</Link>
                     </li>
                     <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                  </ol>
               </nav>
               <h2 className="breadcrumb-title">Dashboard</h2>
            </div>
         </div>
      </div>
   </div>
   <div className="content">
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
               <StickyBox offsetTop={20} offsetBottom={20}>
                  <DoctorSidebar />
               </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
               <div className="row">
                  <div className="col-md-12">
                     <div className="card dash-card">
                        <div className="card-body">
                           <div className="row">
                              <div className="col-md-12 col-lg-4">
                                 <div className="dash-widget dct-border-rht">
                                    <div className="circle-bar circle-bar1">
                                       <div className="circle-graph1" data-percent="75">
                                          <ProgressBar
                                             width={20}
                                             radius={100}
                                             progress={50}
                                             rotate={-210}
                                             strokeWidth={16}
                                             strokeColor="#da3f81"
                                             strokeLinecap="square"
                                             trackStrokeWidth={8}
                                             trackStrokeColor="#e6e6e6"
                                             trackStrokeLinecap="square"
                                             pointerRadius={0}
                                             initialAnimation={true}
                                             transition="1.5s ease 0.5s"
                                             trackTransition="0s ease"
                                             >
                                             <img src={Icon01} className="img-fluid" alt="Patient" />
                                          </ProgressBar>
                                       </div>
                                    </div>
                                    <div className="dash-widget-info">
                                       <h6>Total Patient</h6>
                                       <h3>1500</h3>
                                       <p className="text-muted">Till Today</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-12 col-lg-4">
                                 <div className="dash-widget dct-border-rht">
                                    <div className="circle-bar circle-bar1">
                                       <div className="circle-graph1" data-percent="75">
                                          <ProgressBar
                                             width={20}
                                             radius={100}
                                             progress={60}
                                             rotate={-210}
                                             strokeWidth={16}
                                             strokeColor="#68dda9"
                                             strokeLinecap="square"
                                             trackStrokeWidth={8}
                                             trackStrokeColor="#e6e6e6"
                                             trackStrokeLinecap="square"
                                             pointerRadius={0}
                                             initialAnimation={true}
                                             transition="1.5s ease 0.5s"
                                             trackTransition="0s ease"
                                             >
                                             <img src={Icon02} className="img-fluid" alt="Patient" />
                                          </ProgressBar>
                                       </div>
                                    </div>
                                    <div className="dash-widget-info">
                                       <h6>Today Patient</h6>
                                       <h3>160</h3>
                                       <p className="text-muted">06, Nov 2019</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-12 col-lg-4">
                                 <div className="dash-widget">
                                    <div className="circle-bar circle-bar1">
                                       <div className="circle-graph1" data-percent="75">
                                          <ProgressBar
                                             width={20}
                                             radius={100}
                                             progress={70}
                                             rotate={-210}
                                             strokeWidth={16}
                                             strokeColor="#1b5a90"
                                             strokeLinecap="square"
                                             trackStrokeWidth={8}
                                             trackStrokeColor="#e6e6e6"
                                             trackStrokeLinecap="square"
                                             pointerRadius={0}
                                             initialAnimation={true}
                                             transition="1.5s ease 0.5s"
                                             trackTransition="0s ease"
                                             >
                                             <img src={Icon03} className="img-fluid" alt="Patient" />
                                          </ProgressBar>
                                       </div>
                                    </div>
                                    <div className="dash-widget-info">
                                       <h6>Appoinments</h6>
                                       <h3>85</h3>
                                       <p className="text-muted">06, Apr 2019</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <h4 className="mb-4">Patient Appoinment</h4>
                     <div className="appointment-tab">
                        {/* <!-- Appointment Tab --> */}
                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                           <li className="nav-item">
                              <a className="nav-link active" href="#upcoming-appointments" data-bs-toggle="tab">Upcoming</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#today-appointments" data-bs-toggle="tab">Today</a>
                           </li>
                        </ul>
                        {/* <!-- /Appointment Tab --> */}
                        <div className="tab-content">
                           {/* <!-- Upcoming Appointment Tab --> */}
                           <div className="tab-pane show active" id="upcoming-appointments">
                              <div className="card card-table mb-0">
                                 <div className="card-body">
                                    <div className="table-responsive">
                                       <table className="table table-hover table-center mb-0">
                                          <thead>
                                             <tr>
                                                <th>Patient Name</th>
                                                <th>Appt Date</th>
                                                <th>Purpose</th>
                                                <th>Type</th>
                                                <th className="text-center">Paid Amount</th>
                                                <th></th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={patient} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Richard Wilson <span>#PT0016</span></Link>
                                                   </h2>
                                                </td>
                                                <td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td className="text-center">$150</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={patient1} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Charlene Reed <span>#PT0001</span></Link>
                                                   </h2>
                                                </td>
                                                <td>3 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td className="text-center">$200</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={patient2} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Travis Trimble  <span>#PT0002</span></Link>
                                                   </h2>
                                                </td>
                                                <td>1 Nov 2019 <span className="d-block text-info">1.00 PM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td className="text-center">$75</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={IMG04} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Carl Kelly <span>#PT0003</span></Link>
                                                   </h2>
                                                </td>
                                                <td>30 Oct 2019 <span className="d-block text-info">9.00 AM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td className="text-center">$100</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={IMG05} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Michelle Fairfax <span>#PT0004</span></Link>
                                                   </h2>
                                                </td>
                                                <td>28 Oct 2019 <span className="d-block text-info">6.00 PM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td className="text-center">$350</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={IMG06} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Gina Moore <span>#PT0005</span></Link>
                                                   </h2>
                                                </td>
                                                <td>27 Oct 2019 <span className="d-block text-info">8.00 AM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td className="text-center">$250</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <!-- /Upcoming Appointment Tab -->
                           <!-- Today Appointment Tab --> */}
                           <div className="tab-pane" id="today-appointments">
                              <div className="card card-table mb-0">
                                 <div className="card-body">
                                    <div className="table-responsive">
                                       <table className="table table-hover table-center mb-0">
                                          <thead>
                                             <tr>
                                                <th>Patient Name</th>
                                                <th>Appt Date</th>
                                                <th>Purpose</th>
                                                <th>Type</th>
                                                <th className="text-center">Paid Amount</th>
                                                <th></th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={IMG02} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Elsie Gilley <span>#PT0006</span></Link>
                                                   </h2>
                                                </td>
                                                <td>14 Nov 2019 <span className="d-block text-info">6.00 PM</span></td>
                                                <td>Fever</td>
                                                <td>Old Patient</td>
                                                <td className="text-center">$300</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={IMG02} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Joan Gardner <span>#PT0006</span></Link>
                                                   </h2>
                                                </td>
                                                <td>14 Nov 2019 <span className="d-block text-info">5.00 PM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td className="text-center">$100</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={IMG03} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Daniel Griffing <span>#PT0007</span></Link>
                                                   </h2>
                                                </td>
                                                <td>14 Nov 2019 <span className="d-block text-info">3.00 PM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td className="text-center">$75</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={patient9} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Walter Roberson <span>#PT0008</span></Link>
                                                   </h2>
                                                </td>
                                                <td>14 Nov 2019 <span className="d-block text-info">1.00 PM</span></td>
                                                <td>General</td>
                                                <td>Old Patient</td>
                                                <td className="text-center">$350</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={patient10} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Robert Rhodes <span>#PT0010</span></Link>
                                                   </h2>
                                                </td>
                                                <td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td className="text-center">$175</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h2 className="table-avatar">
                                                      <Link to="/doctor/patient-profile" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={patient11} alt="User Image"/></Link>
                                                      <Link to="/doctor/patient-profile">Harry Williams <span>#PT0011</span></Link>
                                                   </h2>
                                                </td>
                                                <td>14 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
                                                <td>General</td>
                                                <td>New Patient</td>
                                                <td className="text-center">$450</td>
                                                <td className="text-end">
                                                   <div className="table-action">
                                                      <a href="#" className="btn btn-sm bg-info-light">
                                                      <i className="far fa-eye"></i> View
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-success-light">
                                                      <i className="fas fa-check"></i> Accept
                                                      </a>
                                                      <a href="#" className="btn btn-sm bg-danger-light">
                                                      <i className="fas fa-times"></i> Cancel
                                                      </a>
                                                   </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <!-- /Today Appointment Tab --> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <Footer {...props}/>
</div>
);
}
export default DoctorDashboard;