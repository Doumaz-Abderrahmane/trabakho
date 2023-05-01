import React , { useState, useEffect } from 'react';
import axios from 'axios';

import {createRoot} from 'react-dom/client';

import Transformers from "../transformation/Transformers"
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;


const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });
const Sidbarf = () => {
  
    function addSimilation(newvalue) { setModalstate(newvalue); }
    const [refrache, setRefrache] = useState(false);
    const [modalstate, setModalstate] = useState(false);
    const [sessions, setSessions] = useState([]);
    const [childComponents, setChildComponents] = useState([]);
    const [expanded, setExpanded] = useState(true);
    const [activeKey, setActiveKey] = useState('1');
    function ondeleteSession(id)
    {
    const token=localStorage.getItem('Token');
    client.defaults.headers.common['Authorization'] = `Token ${token}`;
      client.delete(
        `/Session/${id}/`,
        { }, {
          withCredentials: true,
          // Ajoutez ce paramètre
        })
        .then(function(res) {
        setRefrache(!refrache) 
      });
    }
    function refrache_state(){ setRefrache(!refrache);}
    function show_graphs(){
        document.getElementById("stratigiste").removeChild(document.getElementById("results"));
        const container = document.createElement('div');
        container.setAttribute("id", "results"); 
        document.getElementById("stratigiste").appendChild(container);
        createRoot(container).render( 
        <div >
          <Transformers ></Transformers></div>
        
       );
      }
      function onSelectSession(id){

        document.getElementById("stratigiste").removeChild(document.getElementById("results"));
        const container = document.createElement('div');
        container.setAttribute("id", "results"); 
        document.getElementById("stratigiste").appendChild(container);
        createRoot(container).render( 
        
        );
     }
     useEffect(() => {
        const token=localStorage.getItem('Token');
        client.defaults.headers.common['Authorization'] = `Token ${token}`;
        client.get(
          "/Session/",
          { }, {
            withCredentials: true,
            // Ajoutez ce paramètre
          })
          .then(function(res) {
          console.log(res);
          setSessions(res.data);
        });
      }, [refrache]);
    return (
        <div className="leftside-menu">
    {/* LOGO */}
    <a href="index.html" className="logo text-center logo-light">
      <span className="logo-lg">
        <img src="assets/images/logo.png" alt="" height={16} />
      </span>
      <span className="logo-sm">
        <img src="assets/images/logo_sm.png" alt="" height={16} />
      </span>
    </a>
    {/* LOGO */}
    <a href="index.html" className="logo text-center logo-dark">
      <span className="logo-lg">
        <img src="assets/images/logo-dark.png" alt="" height={16} />
      </span>
      <span className="logo-sm">
        <img src="assets/images/logo_sm_dark.png" alt="" height={16} />
      </span>
    </a>
    <div className="h-100" id="leftside-menu-container" data-simplebar="">
      {/*- Sidemenu */}
      <ul className="side-nav">
        
       
        <li className="side-nav-title side-nav-item">Apps</li>
        <li className="side-nav-item menuitem-active">
          <div  className="side-nav-link"  onClick={()=>{show_graphs()}}>
            <i className="mdi mdi-graphql" />
            <span> Show transformation </span>
          </div>
        </li>
       
       
    
    
      </ul>
     
     
      {/* End Sidebar */}
      <div className="clearfix" />
    </div>
    {/* Sidebar -left */}
    
  </div>
    );
}

export default Sidbarf;
