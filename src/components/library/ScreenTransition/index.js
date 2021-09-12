import React from 'react'  
import { motion } from 'framer-motion';

const ScreenTransition = ( WrappedComponent ) => {

    const containerVariants = {
        hidden : {
            opacity : 0
        },
        visible : {
            opacity : 1,
            transition : { duration : 0.5 }
        },
        exit: { opacity: 0, transition : { ease : 'easeInOut' , duration : 0.5 }}
    }
   
    class HOC extends React.Component {
        render() {
          return  <motion.div className = 'screen' variants = {containerVariants} initial = 'hidden' animate = 'visible' exit = 'exit'>
                <WrappedComponent />
          </motion.div>
            
        }
      }
      return HOC;
}

export default ScreenTransition;
