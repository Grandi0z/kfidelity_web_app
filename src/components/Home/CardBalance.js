import React from 'react';
import { Link } from 'react-router-dom';

const CardBalance = () => {
  return (
    <div className="card">
      <div className="card-header">
        <label>TOTAL BALANCE</label>
        <h1 id="soldeCompte"></h1>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <Link to="/operation_create" className="info-box">
              <span className="info-box-icon bg-info elevation-1">
                <i className="fas fa-money-bill-wave"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text h4">Envoi Virtuel</span>
              </div>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1">
                <i className="fas fa-thumbs-up"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Total Sortie</span>
                <span className="info-box-number">0</span>
              </div>
            </div>
          </div>

          <div className="clearfix hidden-md-up"></div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1">
                <i className="fas fa-shopping-cart"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Montant Parrainer</span>
                <span className="info-box-number">0</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1">
                <i className="fas fa-users"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Membres Parrainées</span>
                <span className="info-box-number">2,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBalance  ;
