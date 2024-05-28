import React from "react";

const TransactionPeriod = () => {
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <label>TOTAL BALANCE</label>
              <h1 id="soldeCompte">{/* Balance will be displayed here */}</h1>
            </div>
            <div className="col-3">
              <label>Du</label>
              <input
                type="date"
                id="dateDebut"
                className="form form-control form-control-danger filter"
              />
            </div>
            <div className="col-3">
              <label>Du</label>
              <input
                type="date"
                id="dateFin"
                className="form form-control form-control-danger filter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPeriod;
