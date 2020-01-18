import React from 'react';

function Data({member}){
  return(
    <div>
          <div>
              <li>{member.name}</li>
              <ul>
                <li>학년 : {member.grade}</li>
                <li>사용OS : {member.devOs}</li>
                <li>성별 : {member.gender}</li>
              </ul>
          </div>
        </div>
  )
}

function Member(){
    const memberData = [
        {
          pk: 1,
          name: "김민지",
          grade: 1,
          devOs: "window",
          gender: "female"
        },
        {
          pk: 2,
          name: "한우혁",
          grade: 2,
          devOs: "window",
          gender: "male"
        },
        {
          pk: 1,
          name: "황태우",
          grade: 1,
          devOs: "macOS",
          gender: "male"
        }
      ];

      return (
        <div>
          <ol>
          {memberData.map(member =>(
            <Data member={member} key={memberData.name} />
          ))}
          </ol>
        </div>
      )
}

export default Member;