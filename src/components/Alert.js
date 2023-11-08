import React from 'react'

export default function Alert(props) {
    const capatalize = (word) => {
    const tp = word.toLowerCase();
    return tp.charAt(0).toUpperCase() + tp.slice(1).toLowerCase();
    }
  return (
    <div style={{height:'50px'}}>
      {
      props.alert && 
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatalize(props.alert.type)}</strong> : {props.alert.message}
      </div>
      }
    </div>
   
  )
}
