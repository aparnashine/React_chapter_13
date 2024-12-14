import React from 'react';

function Alert(props) {
    //captial 1st letter of success 
    const capitalize=(word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // <div className="alert alert-warning alert-dismissible fade show" role="alert">
    //    props.alert  &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
    // js me likhun gi
    props.alert  &&  <div className={`alert alert-${props.alert.type} alert-ismissible fade show`} role="alert">
        {/* <strong> {props.alert.type} </strong> : {props.alert.msg} */}
        <strong> {capitalize(props.alert.type)} </strong> : {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
           
  );
}

export default Alert;
