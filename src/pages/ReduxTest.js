import React from "react";

import {useSelector,useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import { actionCreators } from "../state/index";


function ReduxTest(){
   // const state = useSelector((state) => state);
  //  (state)=>state.account
  // console.log(state);
const account =useSelector((state => state.account));
const dispatch = useDispatch();
const{ depositMoney , withdrawMoney} = bindActionCreators(actionCreators, dispatch);

    return(

        <div className="ReduxTest">
            \
            <div>
       <h1 >{account}</h1>
       </div>
       <div>
       <button className='btn btn-primary' onClick={ () => depositMoney(1000)}>Deposit</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary' onClick={ () => withdrawMoney(1000)}>Withdraw</button>
        </div>
        </div>
    );
}
export default ReduxTest;