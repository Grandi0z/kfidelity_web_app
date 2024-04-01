import React from 'react';

const OperationStats = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Statistique des opérations</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <div className="chart-responsive">
              <canvas id="pieChart" height="150"></canvas>
              {/* we will use a chart library here, like chartjs for react JS */}
            </div>
          </div>
          <div className="col-md-4">
            <ul className="chart-legend clearfix">
              <li><i className="far fa-circle text-danger"></i> Chrome</li>
              <li><i className="far fa-circle text-success"></i> IE</li>
              <li><i className="far fa-circle text-warning"></i> FireFox</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-footer p-0">
        <ul className="nav nav-pills flex-column">
          {/* Links and percentages here */}
        </ul>
      </div>
    </div>
  );
};

export default OperationStats;
