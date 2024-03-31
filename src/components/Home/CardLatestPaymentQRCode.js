import React from 'react';
import LatestPayments from './LatestPayments';
import QRCodeCard from './QrCodeCard';

const CardLatestPaymentQRCode = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <LatestPayments />
      </div>
      <div className="col-sm-4">
        <QRCodeCard />
      </div>
    </div>
  );
};

export default CardLatestPaymentQRCode;
