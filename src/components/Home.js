import React, { useEffect } from 'react';
// !import styles
import "../assets/plugins/fontawesome-free/css/all.min.css";
import "../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../assets/dist/css/adminlte.min.css";
import "../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "../assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";

// ! import componets
import SidebarSearch from './Home/SidebarSearch';
import UserProfilePanel from './Home/UserProfilePanel';
import Footer from './Footer';
import NavBar from './NavBar';
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
      <NavBar />
      {/* /.navbar */}

      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">K-FIDELITY</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar content */}
          <UserProfilePanel />
          <SidebarSearch />
          {/* Add sidebar content */}
        </div>
        {/* /.sidebar */}
      </aside>

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
      <Footer />
    </div>
  );
};

export default Home