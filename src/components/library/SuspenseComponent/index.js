import  { Suspense } from 'react';
import BackDropLoader from '../backdrop';

const SuspenseComponent = ( WrappedComponent ) => {

   
    const HOC = () => (
        <Suspense fallback= { <BackDropLoader /> }>
          <WrappedComponent />
        </Suspense>
    )
    
    return HOC;
}

export default SuspenseComponent;