
const Tap = ({label, clickFunction}) => {

    return (
        <button onClick={() => clickFunction(label)}>{label}</button>
    )
}

export default Tap;