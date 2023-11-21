// function Team (){
//     return(
//         <section>
//           <h3>Our Team</h3>
//           <div class="team-container">
//               <div class="team-member">
//                 <img src="" alt="" className="smaller-img" />
//                 <h3>Atharva Chakankar</h3>
//                 <p className="small-p">Developer</p>
//                 </div>
//               <div class="team-member">
//                 <img src="" alt="" className="smaller-img"/>
//                 <h3>Ashwin Kapile</h3>
//                 <p className="small-p">Developer</p>
//                 </div>
//               <div class="team-member">
//                 <img src="" alt="" className="smaller-img"/>
//                 <h3>Atharva Kurumbhatte</h3>
//                 <p className="small-p">Developer</p>
//                 </div>
//               <div class="team-member">
//                 <img src="" alt="" className="smaller-img"/>
//                 <h3>Tanish Kinkar</h3>
//                 <p className="small-p">Developer</p>
//                 </div>
//           </div>
//        </section>
//     )
// }

// export default Team;

// Clickable names which will take user to our LinkedIn profiles !
function Team() {
  const teamMembers = [
    {
      name: "Atharva Chakankar",
      role: "Developer",
      linkedIn:
        "https://www.linkedin.com/in/atharva-chakankar?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADjDFPABJb0YZlXXoaFnV-Yc_lMHlJ_H6F4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B64hnXG2YT7abIFiBQOiV1g%3D%3D",
    },
    {
      name: "Ashwin Kapile",
      role: "Developer",
      linkedIn:
        "https://www.linkedin.com/in/ashwin-kapile-tech/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZYKTp5Y8SuiJnE1VHVyimA%3D%3D",
    },
    {
      name: "Atharva Kurumbhatte",
      role: "Developer",
      linkedIn:
        "https://www.linkedin.com/in/atharva-kurumbhatte?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADQnNPIBEnSundan5c_voxULHMUpX9tPDT8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BEy5CKhVVQnCGWK3tMD4Q8g%3D%3D",
    },
    {
      name: "Tanish Kinkar",
      role: "Developer",
      linkedIn:
        "https://www.linkedin.com/in/tanishkinkar?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD0qCAYB0P-2rgut0LNO-c7Yu84alTFRvr4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BmVLXOwkpRnWhNjfP65%2FNVg%3D%3D",
    },
  ];

  return (
    <section>
      <h3>Our Team</h3>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src="" alt="" className="smaller-img" />
            <h3>
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="linked-name"
              >
                {member.name}
              </a>
            </h3>
            <p className="small-p">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
