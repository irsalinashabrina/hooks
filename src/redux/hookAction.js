import React from 'react'

export function updateHook(newNumber) {
  return {
    type:'update',
    payload:{
        num:newNumber
    }

}
}

export default updateHook;
