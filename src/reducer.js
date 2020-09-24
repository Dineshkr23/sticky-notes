export const initialState = {
    array: [],
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

export const actionTypes = {
    ADD_CONTENT: "ADD_CONTENT",
    DELETE_CONTENT: "DELETE_CONTENT",
    MODIFY_CONTENT: "MODIFY_CONTENT",
    SELECT_CONTENT: "SELECT_CONTENT",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        // adding content
        case actionTypes.ADD_CONTENT:
            const arrayData = [...state.array];
            arrayData.map((array) => {
                array["selected"] = false;
            });
            return {
                ...state,
                array: [...arrayData, action.data],
            };

        // selecting content
        case actionTypes.SELECT_CONTENT:
            const arrayData1 = [...state.array];
            arrayData1.map((item) => {
                if (action.id === item.id) {
                    item["selected"] = true;
                } else {
                    item["selected"] = false;
                }
            });
            console.log("The array data 1 is : ", arrayData1);
            return {
                ...state,
                array: arrayData1,
            };

        //deleting content
        case actionTypes.DELETE_CONTENT:
            const Obj1 = [...state.array];
            let index1 = state.array.findIndex((item) => item.id === action.id);
            if (index1 >= 0) {
                // Item exists in basket
                Obj1.splice(index1, 1);
            } else {
                console.warn(`Cant find the id with the ${action.id}`);
            }
            return {
                ...state,
                array: Obj1,
            };

        //modifying content
        case actionTypes.MODIFY_CONTENT:
            const Obj = [...state.array];
            let index = state.array.findIndex((item) => item.id === action.data.id);
            if (index >= 0) {
                // Item exists in basket
                Obj.splice(index, 1, action.data);
            } else {
                console.warn(`Cant find the id with the ${action.id}`);
            }
            return {
                ...state,
                array: Obj,
            };

        default:
            return state;
    }
};

export default reducer;
