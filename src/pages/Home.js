import Base from "../components/Base";
import React from 'react';
import { useState } from 'react';
import { FormBuilder } from "cb-react-forms";
import { FormGenerator } from 'cb-react-forms';

const Home = () => {
   return (

      <div><h2>Implemented features:</h2>
         <h4>Flexible UI</h4> <br/>
         <li>Bootstrap UI Design</li><br/>
         <li>React Dropdown in Navigation bar</li><br/>
         <li>React Data Grid (AgGrid) in About tab</li><br/>
         <h4>Configurable UI</h4><br/>
         <li>H2 Integrated Field Addition</li><br/><br/>
         <h4>Architecture/Design</h4><br/>
         <li>Functional Component</li><br/>
      </div>

   );
};
export default Home