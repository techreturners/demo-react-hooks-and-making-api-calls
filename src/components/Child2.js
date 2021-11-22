import { useContext } from 'react';
import { Context } from '../App';


function Child2() {

    const value = useContext(Context);

    return (
        <h2>Value from child 2 is: {value} </h2>
    )
}



export default Child2