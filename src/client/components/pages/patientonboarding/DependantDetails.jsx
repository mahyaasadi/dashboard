import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import { onelogo, oneslide } from "./img";
import { Link } from "react-router-dom";
import OnboardingSidebar from "../doctoronboarding/onboardingsidebar"

const DependantDetails = (props) => {
  return (
    <>
      <div className="onboard-wrapper">
        <div className="left-panel">
          <div className="onboarding-logo text-center">
            <Link to="/home">
              <img src={onelogo} className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="onboard-img">
            <img src={oneslide} className="img-fluid" alt="" />
          </div>
          <div className="onboarding-slider">
            {/* Slider */}
            <OnboardingSidebar></OnboardingSidebar>
            {/* /Slider */}
          </div>
        </div>
        <div className="right-panel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="right-panel-title text-center">
                  <Link to="/home">
                    {" "}
                    <img src={onelogo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="on-board-wizard">
                  <ul>
                    <li>
                      <Link to="/pages/patient-email">
                        <div className="onboarding-progress active">
                          <span>1</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Registration</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-personalize">
                        <div className="onboarding-progress active">
                          <span>2</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Profile Picture</h6>
                          <p>Upload Profile picture</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-details">
                        <div className="onboarding-progress active">
                          <span>3</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Personal Details</h6>
                          <p>Enter your Personal Details</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-family-details">
                        <div className="onboarding-progress active">
                          <span>4</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Select Members</h6>
                          <p>Enter Details for Register </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-dependant-details">
                        <div className="onboarding-progress active">
                          <span>5</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Dependant details</h6>
                          <p>Dependants Profile</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/patient-other-details">
                        <div className="onboarding-progress">
                          <span>6</span>
                        </div>
                        <div className="onboarding-list">
                          <h6>Other Detail</h6>
                          <p>More information</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="onboarding-content-box content-wrap">
                  <div className="onborad-set">
                    <div className="onboarding-title">
                      <h2>
                        Dependant details<span>*</span>
                      </h2>
                      <h6>Add age & Photo of the each members</h6>
                    </div>
                    <div className="onboarding-content passcode-wrap mail-box">
                      <div className="row">
                        <div className="col-lg-12">
                          <div
                            className="accordion"
                            id="accordionPanelsStayOpenExample"
                          >
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingOne"
                              >
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseOne"
                                  aria-expanded="true"
                                  aria-controls="panelsStayOpen-collapseOne"
                                >
                                  Child
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne"
                              >
                                <div className="accordion-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Age <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <div className="relative-form">
                                          <span>Upload Photo</span>
                                          <label className="relative-file-upload">
                                            File Upload <input type="file" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseTwo"
                                >
                                  Spouse
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo"
                              >
                                <div className="accordion-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Age <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <div className="relative-form">
                                          <span>Upload Photo</span>
                                          <label className="relative-file-upload">
                                            File Upload <input type="file" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseThree"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseThree"
                                >
                                  Father
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree"
                              >
                                <div className="accordion-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Age <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <div className="relative-form">
                                          <span>Upload Photo</span>
                                          <label className="relative-file-upload">
                                            File Upload <input type="file" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingfour"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapsefour"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapsefour"
                                >
                                  Mother
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapsefour"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingfour"
                              >
                                <div className="accordion-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group ">
                                        <div className="passcode-wrap input-placeholder form-focus">
                                          <label className="focus-label">
                                            Age <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control floating"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <div className="relative-form">
                                          <span>Upload Photo</span>
                                          <label className="relative-file-upload">
                                            File Upload <input type="file" />
                                          </label>
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
                    </div>
                  </div>
                  <div className="onboarding-btn">
                    <Link to="/pages/patient-other-details">Continue</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DependantDetails;
