export const initialState = {
   bodyparts:[],
   exercises:[],
   bodypart:"all",
   details:null,
   excerciseVideos:[],
   targetExercise:[],
   equipmentExcercise:[],
   selectedBodyPart:"all",
  
  };
  
 
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) { 
      case 'SET_BODYPARTS':
        return {
          ...state,
          bodyparts: action.bodyparts
        };
      case 'SET_EXERCISES':
        return {
          ...state,
          exercises: action.exercises,
        };
      case 'SET_BODYPART':
        return {
          ...state,
          bodypart: action.bodypart,
        };
      case 'SET_DETAILS':
        return {
          ...state,
          details: action.details,
        };
      case 'SET_EXERCISE_VIDEOS':
        return {
          ...state,
          excerciseVideos: action.excerciseVideos,
        };
     
      case 'SET_TARGET_EXCERCISE':
        return {
          ...state,
          targetExercise: action.targetExercise,
        };
     
      case 'SET_EQUIPMENT_EXERCISE':
        return {
          ...state,
          equipmentExcercise: action.equipmentExcercise,
        };
      case 'SET_SELECTED_BODYPART':
        return {
          ...state,
          selectedBodyPart: action.selectedBodyPart,
        };
     
        
  
      default:
        return state;
    }
  };
  
  export default reducer;
  