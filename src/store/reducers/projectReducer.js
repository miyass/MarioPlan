const initState = {
  projects: [
    {id: '1', title: 'aaaa', content: 'brah blah blah'},
    {id: '2', title: 'bbbb', content: 'brah blah blah'},
    {id: '3', title: 'cccc', content: 'brah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error);
      return state;
    default:
      return state
  }
}

export default projectReducer
