import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';


export default class MobileFooter extends React.Component{

	render(){
		 return (
		 	<footer>
		 	  <Row>
		 	    <Col span={2}></Col>
		 	    <Col span={20} className="footer">
		 	      &copy;&nbsp;2017 ReactNews.by Jessie Yang All right reserved


		 	    </Col>


		 	    <Col span={2}></Col>

		 	  </Row>


		 	</footer>

		 	)

	}
}
