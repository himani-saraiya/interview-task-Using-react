import React from 'react';
import LoadingImage from './assests/Loading2.jpg';

const LoadingComponent = () => {
  return (
    <div>
      <img src={LoadingImage} alt='Loading........' style={{height:"3bh", width:"5bh", alignItems:"center", display:"flex", justifyContent:"center"}}/>
    </div>
  );
};

export default LoadingComponent;
