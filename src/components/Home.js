import React, { useEffect } from "react";


// ! import componets


import Footer from "./Footer";
import NavBar from "./NavBar";

import Sidebar from "./Sidebar";
import CardBalance from "./Home/CardBalance";
import CardLatestPaymentQRCode from "./Home/CardLatestPaymentQRCode";
import CardTransactionStats from "./Home/CardTransactionStats";
import PageTitle from "./PageTittle";

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
  const pageTitle = "Acceuil";
  return (
    <div className="wrapper hold-transition light-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <NavBar />
      <Sidebar />
      <div className="content-wrapper">
        <PageTitle title={pageTitle} />
        <section className="content">
          <div className="container-fluid">
            <CardBalance />
            <CardLatestPaymentQRCode />
            <CardTransactionStats />
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">{/* Place your content here */}</div>
        </section>
      </div>
      <aside className="control-sidebar control-sidebar-dark">
      </aside>
      <Footer />
    </div>
  );
};

export default Home;
