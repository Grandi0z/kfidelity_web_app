import React from 'react';
import OperationStats from './OperationStats';
import RecentTransactions from './RecentTransactions';
const CardTransactionStats = () => {
  return (
    <div className="row pb-5">
      <div className="col-md-8">
        <RecentTransactions />
      </div>
      <div className="col-md-4">
        <OperationStats />
      </div>
    </div>
  );
};

export default CardTransactionStats;
