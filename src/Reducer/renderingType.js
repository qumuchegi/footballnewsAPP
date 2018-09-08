const renderingType=(state={status:null},action)=>{
switch(action.type){
    case'RENDER_LEAGUE':return {...state,status:'willRender_league'};
    case'RENDER_TEAM':return {...state,status:'willRender_team'};
    default:return state;
}
}
export default renderingType;