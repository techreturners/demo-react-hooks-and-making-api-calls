import Child2 from './Child2'

function Child1({ name }) {
    return (
        <>
            <h2>👋 I am child 1!</h2>
            <Child2 name={name} />
        </>
    )
}



export default Child1