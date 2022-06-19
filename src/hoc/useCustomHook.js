import {useState , useEffect} from 'react'


function useCustomHook(init, componentName) {

    const [counter, setCounter] = useState(init)

    function increaseCount(){
        setCounter(counter + 1);
    }

    useEffect(() => {
        console.log(`${componentName} counter: ${counter}`);
    }, [counter, componentName])

    return increaseCount
}


export default useCustomHook;
