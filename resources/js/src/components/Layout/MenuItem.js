import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollArea  from 'react-scrollbar';
import { Collapse } from 'reactstrap';

import classnames from 'classnames';

class MenuItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: this.isActive(this.props.id),
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    isActive(id) {
        const pathId = location.pathname || 'home';
        return !!pathId.match(`^/${this.props.id}`);
    }

    toggleMenu() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    render() {

        console.info('MenuItem::isActive: ', location.pathname, this.props);

        let content;
        let icon;
        let text = this.props.label || this.props.id;

        if (!!this.props.icon) {
            icon = <i className={this.props.icon}></i>;
            text = <span className="right-nav-text">{text}</span>
        }

        if (!!this.props.link) {
            content = (
                <Link to={this.props.link}>
                {icon}
                {text}
                </Link>
            )
        } else if (!!this.props.children) {
            content = [
                <span
                    key="toggler"
                    onClick={this.toggleMenu}
                    aria-expanded={this.state.expanded ? "true" : "false"}
                    className={this.state.expanded ? "link" : " link collapsed"}
                >
                    <div className="pull-left">{icon}{text}</div>
                    <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
                </span>
            ];

            const collapsed = (
                <Collapse key={`collapse_${this.props.id}`} isOpen={this.state.expanded}>
                    <ul key={this.props.id} id={this.props.id} >
                        {
                            this.props.children.map((child) => {
                                return (<MenuItem {...child} />);
                                // return (<li key={child.id}><Link to={`/${child.path}`}>{child.id}</Link></li>)
                            })
                        }
                    </ul>
                </Collapse>
            )

            content.push(collapsed);
        } else {
            return (<li key={this.props.id} className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">{this.props.id} </li>);
        }
        
        return (
            <li
                key={this.props.id}
                className={classnames({active: this.isActive(this.props.id)})}
            >
                {content}
            </li>
        );
    }
}

export default MenuItem;
