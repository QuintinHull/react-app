import { fetch } from "./csrf";

const LOAD = "group/LOAD";
const ADD_ONE = "group/ADD_GROUP";
const LOAD_ONE = "group/LOAD_ONE";
const EDIT_ONE = "group/EDIT_GROUP";
// const REMOVE_ONE = "group/REMOVE_GROUP";

const load = (groups) => ({
  type: LOAD,
  groups,
});

const addOneGroup = (newGroup) => ({
  type: ADD_ONE,
  newGroup,
});

const loadOne = (group) => ({
  type: LOAD_ONE,
  group,
});

const editOneGroup = (updatedGroup) => ({
  type: EDIT_ONE,
  updatedGroup,
});

// const removeOneGroup = (groupId) => ({
//   type: REMOVE_ONE,
//   groupId,
// });

export const getGroups = () => async (dispatch) => {
  const response = await fetch(`/api/groups`);

  if (response.ok) {
    const groups = await response.data;
    dispatch(load(groups));
  }
};

export const createGroup = (payload) => async (dispatch) => {
  const response = await fetch(`/api/groups`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const newGroup = await response.data;
    dispatch(addOneGroup(newGroup));
    return newGroup;
  }
};

export const getOneGroup = (id) => async (dispatch) => {
  const response = await fetch(`/api/groups/${id}`);

  if (response.ok) {
    const group = await response.data;
    dispatch(loadOne(group));
  }
};

export const editGroup = (payload) => async (dispatch) => {
  const response = await fetch(`/api/groups/${payload.id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const updatedGroup = await response.data;
    dispatch(editOneGroup(updatedGroup));
    return updatedGroup;
  }
};

// export const removeGroup = (groupId) => async (dispatch) => {
//   const response = await fetch(``, {
//     method: "delete",
//   });
//   if (response.ok) {
//     dispatch(removeOneGroup(groupId));
//   }
// };

const groupReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD:
      action.groups.forEach((group) => {
        newState[group.id] = group;
      });
      return newState;
    case LOAD_ONE:
      const group = action.group;
      newState[group.id] = group;
      return newState;
    case ADD_ONE:
      const addedGroup = action.newGroup;
      newState[addedGroup.id] = addedGroup;
      return newState;
    // case EDIT_ONE:
    //
    // case REMOVE_ONE:
    //
    default:
      return state;
  }
};

export default groupReducer;
