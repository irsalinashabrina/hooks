import { hookSelector } from "../redux/hookSelector";
import { useDispatch, useSelector } from "react-redux";
import updateHook from "../redux/hookAction";

export const HookComponent = () => {
    const num = useSelector(hookSelector);
    const dispatch = useDispatch();
    return (
        <>
            <div>{num}</div>
            <button onClick={() => dispatch(
                updateHook(`${Number(num) + 1}`)
            )}>Update</button>
        </>
    )
}