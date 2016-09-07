export default function ({dispatch}) {

    return next =>action=> {
        /*
         if the action does not payload or the payload does not have then property
         we dont care it and send it on.
         */
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

// Make sure the actions promise resolve

        action.payload.then(function (response) {

            const newAction = {...action, payload: response};

            dispatch(newAction);
        });

    }


}