import React from "react";

const MyTransactions = () => {
  return (
    <div className="row">
      <div className="col-md-12"> {/* default it md-12, reduice when open the sidebar */}
        <div className="card">
          <div className="card-header border-transparent">
            <h3 className="card-title">Mes Transactions</h3>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive" style={{ height: "55vh" }}>
              <table
                className="table m-0 table-head-fixed"
                id="tableTransaction"
              >
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Référence</th>
                    <th>Lib</th>
                    <th className="justify-content-end">Montant</th>
                  </tr>
                </thead>
                <tbody>{/* Transactions will be populated here */}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTransactions;
