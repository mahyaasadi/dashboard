import React, {useState,useEffect} from "react";
import PatientSidebar from "../patienttsidebar";
import { Link } from "react-router-dom";
import { Tab, Tabs, Modal } from "react-bootstrap";
import {IMG01,IMG02,IMG03,IMG04,IMG05,IMG06,IMG07,IMG08,IMG09,IMG10,patient} from "./img";

const EditPrescription =(props)=> {


    return (
      <div>
       	{/* <!-- Breadcrumb --> */}
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Edit Prescription</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Add Prescription</h2>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Breadcrumb -->
			
			<!-- Page Content --> */}
			<div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						
							{/* <!-- Profile Widget --> */}
							<div className="card widget-profile pat-widget-profile">
								<div className="card-body">
									<div className="pro-widget-content">
										<div className="profile-info-widget">
											<a href="#" className="booking-doc-img">
												<img src={patient} alt="User Image"/>
											</a>
											<div className="profile-det-info">
												<h3><Link to="/doctor/patient-profile">David Pope</Link></h3>
												<div className="patient-details">
													<h5><b>Patient ID :</b> PT0016</h5>
													<h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
												</div>
											</div>
										</div>
									</div>
									<div className="patient-info">
										<ul>
											<li>Phone <span>+1 952 001 8563</span></li>
											<li>Age <span>38 Years, Male</span></li>
											<li>Blood Group <span>AB+</span></li>
										</ul>
									</div>
								</div>
							</div>
							{/* <!-- /Profile Widget --> */}
							
						</div>

						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title mb-0">Edit Prescription</h4>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-sm-6">
											<div className="biller-info">
												<h4 className="d-block">Dr. Eric Buckles</h4>
												<span className="d-block text-sm text-muted">Dentist</span>
												<span className="d-block text-sm text-muted">Newyork, United States</span>
											</div>
										</div>
										<div className="col-sm-6 text-sm-end">
											<div className="billing-info">
												<h4 className="d-block">1 November 2019</h4>
												<span className="d-block text-muted">#INV0001</span>
											</div>
										</div>
									</div>
									
									{/* <!-- Add Item --> */}
									<div className="add-more-item text-end">
										<a href="#"><i className="fa fa-plus-circle"></i> Add More</a>
									</div>
									{/* <!-- /Add Item -->
									
									<!-- Prescription Item --> */}
									<div className="card card-table">
  <div className="card-body">
    <div className="table-responsive">
      <table className="table table-hover table-center">
        <thead>
          <tr>
            <th style={{ width: 200 }}>Name</th>
            <th style={{ width: 100 }}>Quantity</th>
            <th style={{ width: 100 }}>Days</th>
            <th style={{ width: 100 }}>Time</th>
            <th style={{ width: 80 }} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                className="form-control"
                defaultValue="Amoxapine"
                type="text"
              />
            </td>
            <td>
              <input className="form-control" type="text" defaultValue={2} />
            </td>
            <td>
              <input
                className="form-control"
                defaultValue="2 Days"
                type="text"
              />
            </td>
            <td>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /> Morning
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />{" "}
                  Afternoon
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /> Evening
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /> Night
                </label>
              </div>
            </td>
            <td>
              <a href="#" className="btn bg-danger-light trash">
                <i className="far fa-trash-alt" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="form-control"
                type="text"
                defaultValue="Benazepril"
              />
            </td>
            <td>
              <input className="form-control" type="text" defaultValue={2} />
            </td>
            <td>
              <input
                className="form-control"
                defaultValue="1 Days"
                type="text"
              />
            </td>
            <td>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /> Morning
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />{" "}
                  Afternoon
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /> Evening
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" /> Night
                </label>
              </div>
            </td>
            <td>
              <a href="#" className="btn bg-danger-light trash">
                <i className="far fa-trash-alt" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
									{/* <!-- /Prescription Item -->
									
									<!-- Signature --> */}
									<div className="row">
										<div className="col-md-12 text-end">
											<div className="signature-wrap">
												<div className="signature">
													Click here to sign
												</div>
												<div className="sign-name">
													<p className="mb-0">( Dr. Eric Buckles )</p>
													<span className="text-muted">Signature</span>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- /Signature -->
									
									<!-- Submit Section --> */}
									<div className="row">
										<div className="col-md-12">
											<div className="submit-section">
												<button type="submit" className="btn btn-primary submit-btn">Save</button>
												<button type="reset" className="btn btn-secondary submit-btn">Clear</button>
											</div>
										</div>
									</div>
									{/* <!-- /Submit Section --> */}
									
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>		
			{/* <!-- /Page Content --> */}
      </div>
    );
  }


export default EditPrescription;