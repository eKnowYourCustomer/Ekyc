import Base from '../components/Base';
import React, { useState, useRef, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import Board from '../components/Board';
import Cards from '../components/Cards';
import {Card} from "react-bootstrap";

const About = () => {
  
return (
<div>
  <div class="col-sm-12 col-xs-12">
    <h2>About  Citizens Financial Group, Inc.</h2>
    <p>Citizens Financial Group, Inc. is one of the nation’s oldest and largest financial institutions, with $226.7 billion in assets as of June 30, 2022. 
      Headquartered in Providence, Rhode Island, Citizens offers a broad range of retail and commercial banking products and services to individuals, 
      small businesses, middle-market companies, large corporations and institutions. Citizens helps its customers reach their potential by listening 
      to them and by understanding their needs in order to offer tailored advice, ideas and solutions. In Consumer Banking, Citizens provides an 
      integrated experience that includes mobile and online banking, a 24/7 customer contact center and the convenience of approximately 3,300 ATMs 
      and approximately 1200 branches in 14 states in the New England, Mid-Atlantic and Midwest regions. Consumer Banking products and services 
      include a full range of banking, lending, savings, wealth management and small business offerings. In Commercial Banking, Citizens offers 
      a broad complement of financial products and solutions, including lending and leasing, deposit and treasury management services, foreign 
      exchange, interest rate and commodity risk management solutions, as well as loan syndication, corporate finance, merger and acquisition, 
      and debt and equity capital markets capabilities. More information is available at <a href="http://www.citizensbank.com">www.citizensbank.com</a> 
      or visit us on <a href="http://twitter.com/CitizensBank">Twitter</a><u>,</u> <a href="http://www.linkedin.com/company/citizens-bank/">LinkedIn</a>
      or <a href="http://www.facebook.com/citizensbank/">Facebook</a>.</p>

      Find Branch Locations <a href="/atmlocator"> Here </a>
  </div>

</div>
 );
};

export default About;