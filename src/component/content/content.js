import React ,{useRef}from 'react';
import Navbarf from '../navbar/navbarf'

const Content = () => {

    return (
    
        <div className="content-page">
            <div className="content">
                {/* Topbar Start */}
                <Navbarf></Navbarf>
               
                <div className="container-fluid">
                    {/* start page title */}
                    <div className="row" >
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <form className="d-flex">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-light"
                                                id="dash-daterange"
                                            />
                                            <span className="input-group-text bg-primary border-primary text-white">
                                                <i className="mdi mdi-calendar-range font-13" />
                                            </span>
                                        </div>
                                        <a
                                            href="javascript: void(0);"
                                            className="btn btn-primary ms-2"
                                        >
                                            <i className="mdi mdi-autorenew" />
                                        </a>
                                        <a
                                            href="javascript: void(0);"
                                            className="btn btn-primary ms-1"
                                        >
                                            <i className="mdi mdi-filter-variant" />
                                        </a>
                                    </form>
                                </div>
                                <h4 className="page-title" id='page_title'>Dashboard</h4>
                            </div>
                        </div>
                    </div>
                     
                    <div id='stratigiste'>
                     <div id='results'></div>

                     </div>                 
                </div>
            </div>
        </div>
    );
}

export default Content;
