import React from 'react';
import LoadingImage from './assests/Loading2.jpg';

const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img
        src={LoadingImage}
        alt='Loading........'
        style={{ height: '50px', width: '50px', margin: 'auto' }}
      />
    </div>
  );
};

export default LoadingComponent;
