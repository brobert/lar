import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';

import Sitebar from './Sitebar';
import { Row, Col } from 'reactstrap';
import SiteBreadCrumb from 'components/Layout/SiteBreadCrumb';


class Base extends Component{
    constructor(props) {
        super(props);
        this.state = {
            toggleactive: false
          };
        this.updateValue=this.updateValue.bind(this);
      }
      updateValue(value) {
        this.setState(prevState => ({
            toggleactive:!prevState.toggleactive
        }))
      }
    render(){
       
        return(
            <div className={this.state.toggleactive ? "wrapper  slide-menu" : "wrapper"}>
                <Header updateParent={this.updateValue} />
                <div className="container-fluid">
                    <div className="row">
                        <Sitebar />
                        <div className="content-wrapper">
                            <div className="page-title">
                                <Row>
                                    <Col sm={12}>
                                        <SiteBreadCrumb path={this.props.path}/>
                                    </Col>
                                </Row>
                            </div>
                            { this.props.children }
                            <Footer />
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
 
}
export default Base;