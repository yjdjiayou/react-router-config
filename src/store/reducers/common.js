import * as types from '../action-types';

const  initState = {
    commonNum:1
};

export default function (state= initState, action) {
    const {payload} = action;
    switch (action.type) {

        default:
            return state;
    }
}
