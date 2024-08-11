// Context POC ( clean later )
// import React, { Suspense, lazy } from 'react';

// const LazySharedProvider = lazy(() => import('Host/SharedState').then(module => {
//   if (!module.SharedProvider) {
//     return Promise.reject('SharedProvider not available');
//   }
//   return { default: module.SharedProvider };
// }));

// const SharedProviderWrapper = ({ children }) => {
//   return (
//     <Suspense fallback={<div>Loading shared state...</div>}>
//       <LazySharedProvider>
//         {children}
//       </LazySharedProvider>
//     </Suspense>
//   );
// };

// export default SharedProviderWrapper;
