import React, { useEffect } from 'react';
// !import styles
import "../assets/plugins/fontawesome-free/css/all.min.css";
import "../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../assets/dist/css/adminlte.min.css";
import "../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "../assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";

// ! import componets
import Sidebar from './Sidebar';
// ! import js. no necessary to use jquery
//import '../assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
// import '../assets/dist/js/admin-lte/dist/js/adminlte';
// import '../assets/plugins/chart.js/Chart.min';
// import '../assets/plugins/datatables/jquery.dataTables.min';
// import '../assets/dist/js/pages/dashboard2';
// import '../assets/kfidelity';
// import 'plugins/datatables/jquery.dataTables.min';
// import 'plugins/datatables-bs4/js/dataTables.bootstrap4.min';
//import QrCode from '../assets/plugins/qrcode/qrcode';

const Home = () => {
  // useEffect(() => {
  //   // Initialize required scripts
  //   const pushMenuHandler = () => {
  //     document.body.classList.toggle('sidebar-collapse');
  //   };
  //   document.querySelector('[data-widget="pushmenu"]').addEventListener('click', pushMenuHandler);

  //   // QR Code generation
  //   QrCode.toCanvas(document.getElementById('qrcode'), 'Your QR Code Data Here', function (error) {
  //     if (error) console.error(error);
  //     console.log('QR Code generated');
  //   });

  //   // DataTable initialization
  //   const tablePartenaire = document.getElementById('tablePartenaire');
  //   const tableTransaction = document.getElementById('tableTransaction');
  //   if (tablePartenaire && tableTransaction) {
  //     window.$(tablePartenaire).DataTable();
  //     window.$(tableTransaction).DataTable();
  //   }

  //   // Cleanup
  //   return () => {
  //     document.querySelector('[data-widget="pushmenu"]').removeEventListener('click', pushMenuHandler);
  //   };
  // }, []);

  return (
          <div className="wrapper hold-transition light-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
    
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-light">
              {/* Left navbar links */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="index3.html" className="nav-link">Acceuil</a>
                </li>
              </ul>
    
              {/* Right navbar links */}
              <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                  <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                    <i className="fas fa-search"></i>
                  </a>
                  <div className="navbar-search-block">
                    <form className="form-inline">
                      <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                          <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                          <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </nav>
            {/* /.navbar */}
    
            {/* Main Sidebar Container */}
            <Sidebar />
    
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
              {/* Content Header (Page header) */}
              <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0">Acceuil </h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.content-header */}
    
              {/* Main content */}
              <section className="content">
                <div className="container-fluid">
                  {/* Place your content here */}
                </div>
              </section>
              {/* /.content */}
            </div>
            {/* /.content-wrapper */}
    
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
              {/* Control sidebar content */}
            </aside>
            {/* /.control-sidebar */}
    
            {/* Main Footer */}
            <footer className="main-footer">
              <strong>Designed by &copy; 2024 <a href="https://afri-soft.com">Afri-Soft</a>.</strong>
              All rights reserved.
              <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 1.0
              </div>
            </footer>
          </div>
      );
    };

export default Home