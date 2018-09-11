import React from 'react';
import '../Css/TeamItem.css';

const ClubQueryItem=({time,clubname1,clubname2,result,leaguetype,keyteam})=>{
        
        return(
          <div id='ClubQueryItem'>
          <div id='time'>{time}</div>
          <div id='leaguetype'>{leaguetype}</div>
           <div>
            <div id='clubname1' style={clubname1===keyteam?{backgroundColor:'rgba(12,23,34,0.7)'}:null}>
            <span style={{color:'white',fontSize:'60%',textAlign:'left'}}>主队</span>
            {'  '}{clubname1}
            </div>
            <div id='result'>{result}</div>
            <div id='clubname2'style={clubname2===keyteam?{backgroundColor:'rgba(12,23,34,0.7)'}:null}>
            <span style={{color:'white',fontSize:'60%'}}>客队</span>
            {'  '}{clubname2}
            </div>
           </div>
          </div>)
          };
export default ClubQueryItem;