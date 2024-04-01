import React from 'react';

const QRCodeCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Mon QR-CODE</h3>
      </div>
      <div className="card-body" style={{ height: '250px' }} id="qrcode">
        {/* QR Code should be generated and displayed here */}
      </div>
      <div className="card-footer clearfix">
        <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">
          <i className="fa fa-share mr-2"></i>Partager
        </a>
      </div>
    </div>
  );
};

export default QRCodeCard;
