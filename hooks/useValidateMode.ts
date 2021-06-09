import { useDispatch, useSelector } from "react-redux";
import { commonValidateMode } from "../reducers/common";

const useValidateMode = () => {
    const dispatch = useDispatch();
    const validateMode = useSelector((state: any) => state.common.validateMode);

    const setValidateMode = (value: boolean) =>
        dispatch(commonValidateMode(value));

    return { validateMode, setValidateMode };
};

export default useValidateMode;
