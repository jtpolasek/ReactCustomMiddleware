export default function({ dispatch }) {
  return next => action => {
    //if the action does not have payload or is not promise
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    //Make sure the action's promise resolves
    action.payload.then(response => {
      //create new action with old type but now with
      // response data as promise has returned
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
}
