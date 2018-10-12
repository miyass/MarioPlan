//Action Creator
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    console.log(project);
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Ryu',
      authorLastName: 'Hogehoge',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project });
    }).catch((error) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', error });
    })
  }
};
