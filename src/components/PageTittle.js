import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageTitle = (props) => {
    const { title} = props;
    const breadcrumbItems = [
        { label: "Home", path: "home", active: false },
        { label: "Dashboard", path: "#", active: true }
    ];
    // we will use useEffect to change the active link
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{title}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {breadcrumbItems.map((item, index) => (
                                <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
                                    {item.active ? (
                                        item.label
                                    ) : (
                                        <Link to={item.path}>{item.label}</Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbItems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string,
        active: PropTypes.bool
    }))
};

export default PageTitle;
