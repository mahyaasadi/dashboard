import React, { Component } from 'react';
import loginBanner from '../../assets/images/login-banner.png';
import Logo from '../../assets/images/logo.png'
import camera from '../../assets/images/icons/camera.svg';
import male from '../../assets/images/icons/male.png'
import female from '../../assets/images/icons/female.png'

import { Link } from 'react-router-dom';


const Pharmacyregistersteptwo =()=> {

        return(
			<>
		{/* <!-- Page Content --> */}
			<div className="content login-page pt-0">
				<div className="container-fluid">
					
					{/* <!-- Register Content --> */}
					<div className="account-content">
						<div className="row align-items-center">
							<div className="login-right">
								<div className="inner-right-login">
									<div className="login-header">
										<div className="logo-icon">
											<img src={Logo} alt=""/>
										</div>
										<div className="step-list">
											<ul>
												<li><a href="#" className="active-done">1</a></li>
												<li><a href="#" className="active">2</a></li>
                                                <li><a href="#">3</a></li>
											</ul>
										</div>
										<form method="post">
				                        	<h3 className="my-4">Your Location</h3>
				                        	<div className="form-group">
												<label>Select City</label>
												<select className="form-select form-control" id="heart_rate" name="heart_rate" tabindex="-1" aria-hidden="true">
													<option value="">Select Your City</option>
													<option value="1">City 1</option>
													<option value="2">City 2</option>
												</select>
											</div>
											<div className="form-group">
												<label>Select State</label>
												<select className="form-select form-control" id="bp" name="bp" tabindex="-1" aria-hidden="true">
													<option value="">Select Your State</option>
													<option value="1">State 1</option>
													<option value="2">State 2</option>
												</select>
											</div>
							                <div className="mt-5">
					                        	<Link to="/Pharmacy/pharmacy-registerstep-3" className="btn btn-primary w-100 btn-lg login-btn step5_submit">Continue</Link>
					                        </div>
				                        </form>
									</div>
								</div>
								<div className="login-bottom-copyright">
									<span>© 2022 Doccure. All rights reserved.</span>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Register Content --> */}

				</div>

			</div>		
			{/* <!-- /Page Content --> */}
		  </>
		  
    	
        );
    }


export default Pharmacyregistersteptwo;