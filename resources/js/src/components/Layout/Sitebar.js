import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ScrollArea  from 'react-scrollbar';
import { Collapse } from 'reactstrap';
import './Header';
import MenuItem from './MenuItem';

import routesTree from 'RoutesTree';

class Sitebar extends Component{
   constructor(props)
   {
     super(props);

     this.dashboard=this.dashboard.bind(this);
     this.elements=this.elements.bind(this);
     this.calendarmenu=this.calendarmenu.bind(this);
     this.form=this.form.bind(this);
     this.sidebarnav=this.sidebarnav.bind(this);
     this.table=this.table.bind(this);
     this.custompage=this.custompage.bind(this);
     this.authentication=this.authentication.bind(this);
     this.multilevel=this.multilevel.bind(this);
     this.auth=this.auth.bind(this);
     this.login=this.login.bind(this);
     this.invoice=this.invoice.bind(this);
     this.error=this.error.bind(this);

     this.state={
       dashboard:false,
       elements:false,
       calendarmenu:false,
       form:false,
       sidebarnav:false,
       table:false,
       custompage:false,
       authentication:false,
       multilevel:false,
       auth:false,
       login:false,
       invoice:false,
       error:false,
       plussignele:false,
       plussignform:false,
       plussigndata:false,
       plussigncustome:false,
       plussignauthentic:false,
       plussignmulti:false,
       plussignauth:false,
       plussignlogin:false,
       plussigninvo:false,
       plussignerror:false
     }
   }

   dashboard()
   {
      this.setState({
        dashboard:!this.state.dashboard
      })
   }
   elements()
   {
     this.setState({
       elements:!this.state.elements,
       plussignele:!this.state.plussignele
     })
   }
   calendarmenu()
   {
     this.setState({
        calendarmenu:!this.state.calendarmenu
     })
   }
   sidebarnav()
   {
     this.setState({
      sidebarnav:!this.state.sidebarnav
     })
   }
   form()
   {
     this.setState({
      form:!this.state.form,
      plussignform:!this.state.plussignform
     })
   }
   table()
   {
     this.setState({
       table:!this.state.table,
       plussigndata:!this.state.plussigndata
     })
   }
   custompage(){
     this.setState({
       custompage:!this.state.custompage,
       plussigncustome:!this.state.plussigncustome
     })
   }
   authentication(){
     this.setState({
       authentication:!this.state.authentication,
       plussignauthentic:!this.state.plussignauthentic
     })
   }
   multilevel(){
     this.setState({
      multilevel:!this.state.multilevel,
      plussignmulti:!this.state.plussignmulti
     })
   }

   auth(){
    this.setState({
      auth:!this.state.auth,
      plussignauth:!this.state.plussignauth
    })
  }
  login(){
    this.setState({
      login:!this.state.login,
      plussignlogin:!this.state.plussignlogin
    })
  }
  invoice(){
    this.setState({
      invoice:!this.state.invoice,
      plussigninvo:!this.state.plussigninvo
    })
  }
  error(){
    this.setState({
      error:!this.state.error,
      plussignerror:!this.state.plussignerror
    })
  }
 render(){

     const menuExt = routesTree.map((menuItem, idx) => {
         return (
             <MenuItem key={idx} {...menuItem} />
        );
    });
        return(
           // <!-- Left Sidebar start-->

          //  <Collapse isOpen={this.props.toggerbutton}>
            <div className="side-menu-fixed">
                <ScrollArea
                    speed={0.6}
                    style={{overflow: 'hidden'}}
                    className="scrollbar side-menu-bg"
                    contentClassName="saidbar"
                    horizontal={false}
                >
                    <div className="saidbar">
                        <ul className="nav navbar-nav side-menu" id="sidebarnav">
                        {/* <!-- menu item Dashboard--> */}
                            {menuExt}
                            <li className="active">
                                <Link to="/"><i className="ti-home"></i><span className="right-nav-text">Dashboard</span></Link>
                            </li>
                            {/* <!-- menu title --> */}
                            <li className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">Components </li>
                            {/* <!-- menu item Elements--> */}
                            <li>
                                <span
                                    onClick={this.elements}
                                    aria-expanded={this.state.plussignele ? "true" : "false"}
                                    className={this.state.plussignele ? "link" : " link collapsed"}
                                >
                                    <div className="pull-left"><i className="ti-palette"></i><span className="right-nav-text">Elements</span></div>
                                    <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
                                </span>
                                <Collapse isOpen={this.state.elements}>
                                    <ul id="elements"  >
                                        <li><Link to="/accordion">Accordions</Link> </li>
                                        <li><Link to="/alerts">Alerts</Link></li>
                                        <li><Link to="/buttons">Button</Link></li>
                                        <li><Link to="/colors">Colorpicker</Link></li>
                                        <li><Link to="/dropdown">Dropdown</Link></li>
                                        <li><Link to="/lists">Lists</Link></li>
                                        <li><Link to="/navs">Nav</Link></li>
                                        <li><Link to="/modal">Modal</Link></li>
                                        <li><Link to="/nicescroll">Nicescroll</Link></li>
                                        <li><Link to="/ratings">Ratings</Link></li>
                                        <li><Link to="/datepicker">Date picker</Link></li>
                                        <li><Link to="/tabs">Tabs</Link></li>
                                        <li><Link to="/typographys">Typography</Link></li>
                                        <li><Link to="/popover_tooltips">Popover tooltips</Link></li>
                                        <li><Link to="/progess">Progress</Link></li>
                                        <li><Link to="/switchs">Switch</Link></li>
                                    </ul>
                                </Collapse>
                            </li>
                            {/* <!-- menu item chat--> */}
                            <li>
                                <Link to="./chat"><i className="ti-comments"></i><span className="right-nav-text">Chat </span></Link>
                            </li>
                            {/* <!-- menu item mailbox--> */}
                            <li>
                                <Link to="./mailbox">
                                    <i className="ti-email"></i>
                                    <span className="right-nav-text">Mail box</span>
                                    <span className="badge badge-pill badge-warning float-right mt-1">HOT</span>
                                </Link>
                            </li>
                            {/* <!-- menu item calendar--> */}
                            <li>
                                <Link to="./eventcalendar"><i className="ti-calendar"></i><span className="right-nav-text">Events Calendar</span> </Link>
                            </li>
                            {/* <!-- menu item Charts--> */}
                            <li>
                                <Link to="/chartjs"><i className="ti-pie-chart"></i><span className="right-nav-text">Charts</span></Link>
                            </li>

                            {/* <!-- menu font icon--> */}
                            <li>
                                <Link to="./fontawesome"><i className="ti-home"></i><span className="right-nav-text">Font Awesome</span> </Link>
                            </li>

                            {/* <!-- menu title --> */}
                            <li className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">Widgets, Forms & Tables </li>

                            {/* <!-- menu item Widgets--> */}
                            <li>
                                <Link to="/widget"><i className="ti-blackboard"></i><span className="right-nav-text">Widgets</span> <span className="badge badge-pill badge-danger float-right mt-1">24</span> </Link>
                            </li>

                            {/* <!-- menu item Form--> */}
                            <li>
                                <span onClick={this.form}  aria-expanded={this.state.plussignform ? "true" : "false"} className={this.state.plussignform ? "link" : " link collapsed"}>
                                    <div className="pull-left"><i className="ti-files"></i><span className="right-nav-text">Form & Editor</span></div>
                                    <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
                                </span>
                                <Collapse isOpen={this.state.form}>
                                    <ul id="Form" >
                                        <li> <Link to="/form/input">Form input</Link> </li>
                                        <li> <Link to="/form/validation">form validation</Link> </li>
                                        <li> <Link to="/inputgroup">input group</Link> </li>
                                    </ul>
                                </Collapse>
                            </li>

                            {/* <!-- menu item table --> */}
                            <li>
                                <span onClick={this.table} aria-expanded={this.state.plussigndata ? "true" : "false"} className={this.state.plussigndata ? "link" : " link collapsed"}>
                                    <div className="pull-left"><i className="ti-layout-tab-window"></i><span className="right-nav-text">data table</span></div>
                                    <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
                                </span>
                                <Collapse isOpen={this.state.table}>
                                    <ul id="table" >
                                        <li> <Link to="/datatable">Data html table</Link> </li>
                                        <li> <Link to="/tables">Data table</Link> </li>
                                    </ul>
                                </Collapse>
                            </li>

                            <li className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">More Pages</li>

                            {/* <!-- menu item Custom pages--> */}
                            <li>
                                <span onClick={this.custompage} aria-expanded={this.state.plussigncustome ? "true" : "false"} className={this.state.plussigncustome ? "link" : " link collapsed"}>
                                    <div className="pull-left"><i className="ti-file"></i><span className="right-nav-text">Custom pages</span></div>
                                    <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
                                </span>
                                <Collapse  isOpen={this.state.custompage}>
                                    <ul id="custom-page" data-parent="#sidebarnav">
                                        <li> <Link to="./contacts">Contact</Link> </li>
                                        <li> <Link to="./invoice">Invoice</Link> </li>
                                        <li> <Link to="./blankpage">Blank Page</Link> </li>
                                        <li> <Link to="./error">Error</Link> </li>
                                        <li> <Link to="./faq">faqs</Link> </li>
                                    </ul>
                                </Collapse>
                            </li>

                            {/* <!-- menu item Authentication--> */}
                            <li>
                                <span  onClick={this.authentication} aria-expanded={this.state.plussignauthentic ? "true" : "false"} className={this.state.plussignauthentic ? "link" : " link collapsed"}>
                                    <div className="pull-left"><i className="ti-id-badge"></i><span className="right-nav-text">Authentication</span></div>
                                    <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
                                </span>
                                <Collapse  isOpen={this.state.authentication}>
                                    <ul id="authentication"  data-parent="#sidebarnav">
                                        <li> <Link to="/login">login</Link> </li>
                                        <li> <Link to="/register">register</Link> </li>
                                    </ul>
                                </Collapse>
                            </li>

                            {/* <!-- menu item maps--> */}
                            <li>
                                <Link to="/maps">
                                    <i className="ti-location-pin"></i>
                                    <span className="right-nav-text">maps</span>
                                    <span className="badge badge-pill badge-success float-right mt-1">02</span>
                                </Link>
                            </li>

                            {/* <!-- menu item Multi level--> */}
                            <li>
                                <span
                                    onClick={this.multilevel}
                                    aria-expanded={this.state.plussignmulti ? "true" : "false"}
                                    className={this.state.plussignmulti ? "link" : "link collapsed"}
                                >
                                    <div className="pull-left">
                                        <i className="ti-layers"></i>
                                        <span className="right-nav-text">Multi level Menu</span>
                                    </div>
                                    <div className="pull-right">
                                        <i className="ti-plus"></i>
                                    </div>
                                    <div className="clearfix"></div>
                                </span>
                                <Collapse  isOpen={this.state.multilevel}>
                                    <ul>
                                        <li>
                                            <span onClick={this.auth} aria-expanded={this.state.plussignauth ? "true" : "false"} className={this.state.plussignauth ? "link" : " link collapsed"}>Level item 1<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></span>
                                            <Collapse  isOpen={this.state.auth}>
                                                <ul>
                                                    <li>
                                                        <span onClick={this.login}  aria-expanded={this.state.plussignlogin ? "true" : "false"} className={this.state.plussignlogin ? "link" : " link collapsed"} >Level item 1.1<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></span>
                                                        <Collapse  isOpen={this.state.login}>
                                                            <ul>
                                                                <li>
                                                                    <span onClick={this.invoice} aria-expanded={this.state.plussigninvo ? "true" : "false"} className={this.state.plussigninvo ? "link" : " link collapsed"}>level item 1.1.1<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></span>
                                                                    <Collapse  isOpen={this.state.invoice}>
                                                                        <ul>
                                                                            <li> <Link to='/'>level item 1.1.1.1</Link> </li>
                                                                            <li> <Link to='/'>level item 1.1.1.2</Link> </li>
                                                                        </ul>
                                                                    </Collapse>
                                                                </li>
                                                            </ul>
                                                        </Collapse>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li> <Link to='/'>level item 1.2</Link> </li>
                                                </ul>
                                            </Collapse>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span  onClick={this.error} aria-expanded={this.state.plussignerror ? "true" : "false"} className={this.state.plussignerror ? "link" : " link collapsed"} >level item 2<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></span>
                                            <Collapse  isOpen={this.state.error}>
                                                <ul>
                                                    <li> <Link to='/'>level item 2.1</Link> </li>
                                                    <li> <Link to='/'>level item 2.2</Link> </li>
                                                </ul>
                                            </Collapse>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                        </ul>
                    </div>
                </ScrollArea>
            </div>
            // </Collapse>
        );
    }
}
export default Sitebar;
