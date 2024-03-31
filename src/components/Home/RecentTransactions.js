import React from 'react';

const RecentTransactions = () => {
  return (
    <div className="card">
      <div className="card-header border-transparent">
        <h3 className="card-title">Transactions Récentes</h3>
        <div className="card-tools">
          <a href="mon_compte.html" className="btn btn-secondary">
            Voir Plus
          </a>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive" style={{ height: '400px' }}>
          <table className="table m-0 table-head-fixed" id="tableTransaction">
            <thead>
              <tr>
                <th>Date</th>
                <th>Référence</th>
                <th>Lib</th>
                <th className="justify-content-end">Montant</th>
              </tr>
            </thead>
            <tbody>
              {/* Transaction rows will be inserted here */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer clearfix">
        <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Nouvelle Ops</a>
        <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">Voir Plus</a>
      </div>
    </div>
  );
};

export default RecentTransactions;
