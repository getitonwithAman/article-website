import React from 'react';
import Articles from '../components/Articles/Articles';

export default function ArticalsForEachCatagory(props) {
  return (
    <div style={{minHeight:'100vh'}}>
      <h1 style={{textAlign: 'center'}}>{props.heading}</h1>
      <Articles/>
    </div>
  )
}
