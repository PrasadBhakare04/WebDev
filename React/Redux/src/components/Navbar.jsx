import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'
export default function Navbar(){
    const counter = useSelector(state => state.counter.value);
    return <nav>This is a navbar and the value of the count is {counter}</nav>
}