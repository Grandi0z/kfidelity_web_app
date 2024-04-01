import React from 'react';

const LatestPayments = () => {
  return (
    <div className="card">
      <div className="card-header border-transparent">
        <h3 className="card-title">Partenaire : Payement des Factures</h3>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive" style={{ height: '300px' }}>
          <table className="table table-head-fixed m-0" id="tablePartenaire">
            <thead>
              <tr>
                <th>ID</th>
                <th>Désignation</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestPayments;
