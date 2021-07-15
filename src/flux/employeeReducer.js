

export default function EmployeeReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'addEmployee':
      return {employee: action.employee}  
    default:
      return state
  }
}

