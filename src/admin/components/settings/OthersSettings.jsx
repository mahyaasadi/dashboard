import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import SidebarNav from "../sidebar";


const OthersSettings = () => {
  return (
    <>
    <SidebarNav />
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="page-title">Settings</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/admin/settings">Settings</Link>
              </li>
              <li className="breadcrumb-item active">Others Settings</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Settings Menu */}
          <div className="settings-menu-links">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/settings">
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/localization-details">
                  Localization
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/payment-settings">
                  Payment Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/email-settings">
                  Email Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/social-settings">
                  Social Media Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/social-links">
                  Social Links
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/seo-settings">
                  SEO Settings
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/admin/others-settings">
                  Others
                </Link>
              </li>
            </ul>
          </div>
          {/* Settings Menu */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Enable Google Analytics</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        id="status_1"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_1" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <label>
                          Google Analytics <span className="star-red">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Google Analytics"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Enable Google Adsense Code</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        id="status_2"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_2" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <label>
                          Google Adsense Code{" "}
                          <span className="star-red">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Google Adsense Code"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Display Facebook Messenger</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        id="status_3"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_3" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <label>
                          Facebook Messenger <span className="star-red">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Facebook Messenger"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Display Facebook Pixel</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        id="status_4"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_4" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <label>
                          Google Adsense Code{" "}
                          <span className="star-red">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Google Adsense Code"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card w-100">
                <div className="card-body pt-0">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Display Google Recaptcha</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        id="status_5"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_5" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group form-placeholder">
                        <label>
                          Google Rechaptcha Site Key{" "}
                          <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="6LcnPoEaAAAAAF6QhKPZ8V4744yiEnr41li3SYDn"
                        />
                      </div>
                      <div className="form-group form-placeholder">
                        <label>
                          Google Rechaptcha Secret Key{" "}
                          <span className="star-red">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="6LcnPoEaAAAAACV_xC4jdPqumaYKBnxz9Sj6y0zk"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card w-100">
                <div className="card-body pt-0">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Cookies Agreement</h5>
                    <div className="status-toggle d-flex justify-content-between align-items-center">
                      <input
                        type="checkbox"
                        id="status_6"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_6" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <label>
                          Cookies Agreement Text{" "}
                          <span className="star-red">*</span>
                        </label>
                        <div id="editor" />
                      </div>
                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button type="submit" className="btn btn-orange">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default OthersSettings