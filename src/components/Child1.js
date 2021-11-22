import Child2 from './Child2'
import { useContext } from 'react';
import { Context } from '../App';


function Child1() {

    const value = useContext(Context);

    return (
        <>
            <h2>Value from Child 1: {value}</h2>
            
            <Child2 />
        </>
    )
}

export default Child1



