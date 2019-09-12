import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb ,BreadcrumbItem } from 'reactstrap';

class SiteBreadCrumb extends React.Component {

    construct(props) {
        this.super(props);
    }

    render() {
        
        const pathParts = this.props.path.replace(/^\//,'').split('/').filter(path => path);
        console.info('SiteBreadCrumb', this.props.path, pathParts);
        let crumbs = [];
        for (let idx = 0; idx < pathParts.length; idx++ ) {
            const path = pathParts.slice(0, idx+1).join('/');
            console.info('>>>>>>>>>>', path);
            crumbs.push(<BreadcrumbItem key={idx}><Link to={`/${path}`}>{pathParts[idx]}</Link></BreadcrumbItem>)
        }
        return (
            <Breadcrumb className="float-left float-sm-left">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                {crumbs}
            </Breadcrumb>
        );
    }
}

export default SiteBreadCrumb;