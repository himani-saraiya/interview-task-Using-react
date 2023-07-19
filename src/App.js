import './App.css';
// import RagistrationForm from './RagistrationForm';
import React, { lazy, Suspense } from 'react';
import Loading from './Loading';
const LazyRegistrationForm = lazy(() => import('./RagistrationForm'));
function App() {
  return (
        <div>
          <Suspense fallback={
            <Loading />
          }>
            <LazyRegistrationForm />
          </Suspense>
        </div>
    
  );

}
export default App;
