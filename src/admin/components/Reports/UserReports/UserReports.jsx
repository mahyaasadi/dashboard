import React, {useEffect, useState} from 'react';
import SidebarNav from "../../sidebar";
import { Link } from "react-router-dom";
import { avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar11, avatar12, avatar13, sort } from '../../imagepath';
import UserReportTable from './UserReportTable';

const UserReports = () => {
    const [show, setShow] =useState(false);
        const toggleFilterMenu = () =>{
            console.log(show)
            setShow(!show)
        }
  return (
    <>
    <SidebarNav />
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid content-wrap">
      {/* User Reports */}
      <div className="row">
        <div className="col-sm-12">
          <div className="app-listing">
            <div className="custom-list">
              <div className="SortBy">
                <div className="selectBoxes order-by">
                  <p className="mb-0" onClick={(value)=>toggleFilterMenu()}>
                    <img
                      src={sort}
                      className="me-2"
                      alt="icon"
                    />{" "}
                    Order by{" "}
                  </p>
                  <span className="down-icon">
                    <i className="feather-chevron-down" />
                  </span>
                </div>
                <div id="checkBox" style={{ display: show ? "block" : "none" }}>
                  <form action="/admin/userreports">
                    <p className="lab-title">Order By </p>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> ID
                    </label>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> Amount
                    </label>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> Date
                    </label>
                    <label className="custom_radio w-100">
                      <input type="radio" name="order" />
                      <span className="checkmark" /> Number of Appointments
                    </label>
                    <p className="lab-title">Sort By</p>
                    <label className="custom_radio w-100">
                      <input type="radio" name="sort" />
                      <span className="checkmark" /> Ascending
                    </label>
                    <label className="custom_radio w-100 mb-3">
                      <input type="radio" name="sort" />
                      <span className="checkmark" /> Descending
                    </label>
                    <button type="submit" className="btn w-100 btn-primary">
                      Apply
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="import-list">
              <Link to="#">
                <i className="feather-download" /> Import
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-header border-bottom-0">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="card-title">User Reports</h5>
                </div>
                <div className="col-auto d-flex">
                  <div className="form-custom me-2">
                    <div id="tableSearch" className="dataTables_wrapper" />
                  </div>
                </div>
              </div>
            </div>
            <UserReportTable/>
            
          </div>
          <div id="tablepagination" className="dataTables_wrapper" />
        </div>
      </div>
      {/* /User Reports */}
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default UserReports