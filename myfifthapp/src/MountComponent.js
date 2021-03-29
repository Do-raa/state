import React from 'react';



  /*const componentDidMount = () => {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = componentDidMount(() => {               //setInterval
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [])}; 


    export default MountComponent ;*/ 
   function 
    componentDidMount(){  
      const [seconds, setSeconds] = useState(0);
      const interval = setInterval(() => {                //setInterval
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
      
export default MountComponent ; 