export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const MANAGE_QTY = "MANAGE_QTY"


export const addItem = (data)=>{
  return{
    type: ADD_ITEM,
    payload: data
  }
}

export const removeItem = (data)=>{
  return{
    type: REMOVE_ITEM,
    payload: data
  }
}


export const manageQty = (data)=>{
  return{
    type: MANAGE_QTY,
    payload: data
  }
}
