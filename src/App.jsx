
import './App.css';
import { AuthProvider } from './Context/AuthContext';

import { AnimatePresence } from 'framer-motion';
import Router from './Router';

const App = () => {


  return (
    <>
    <AnimatePresence wait>
    <AuthProvider>

      <Router/>   

    </AuthProvider>

    </AnimatePresence>
    </>

  );

};



export default App;