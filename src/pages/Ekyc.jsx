import React from 'react';
import { useState } from 'react';
import { FormBuilder } from "cb-react-forms";
import { FormGenerator } from 'cb-react-forms';
import { useEffect } from 'react';
import axios from 'axios';
import '../App.css';


function Ekyc() {
  const [dataArray, setDataArray] = useState([]);
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);
  const [preData, setPreData] = useState([]);
  let tempData = [];
  console.log("consolelog ");

  const getFormData = () =>{
    fetch("http://localhost:4040/userform/detail")
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      // data.map(element => {
      //   console.log(" element :",element);
      //    tempData.push(JSON.parse(element.fieldData));
      //    console.log(tempData);
      //    setDataArray(tempData);
      // });
      tempData = data.map(element => {
        return element.fieldData = JSON.parse(element.fieldData);
      });
      console.log(tempData);
      setDataArray(tempData);
    })

  }

  useEffect(() => {
    console.log("useeffect");
    getFormData();
  }, []);

  const onSubmitFunc = (data) => {
    // Submit Function
    setShow(false);
    setFlag(false);

    axios({
      method: 'post',
      url: 'http://localhost:4040/userform/insertfield',
      data: {
        "userId": (dataArray.length + 1).toString(),
        "fieldData": JSON.stringify(JSON.parse(data))
      }
    }).then((data) =>{
      getFormData();
    });
    // getFormData("");
    //setDataArray(dataArray.concat(JSON.parse(data)));
    // console.log("demo:");


    console.log("Data array:", dataArray);

    //console.log(demo);
    setTimeout(() => {
      setFlag(false);

    }, 1000);
  };

  const editForm = () => {

    setShow(!show);
    setFlag(!flag);
  }
  return (
    <div>
      <div className="editFormDiv">
        <button className="editForm btn-primary btn " onClick={editForm} >Edit Form</button>
        {show && <FormBuilder onSubmit={data => onSubmitFunc(data)} />}
      <h3>Configurable UI</h3>
      </div>

      <div>
        {(!flag && !show) ? <FormGenerator
          formData={dataArray}
        /> : null}
      </div>
    </div>
  );
};


export default Ekyc;