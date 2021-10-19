import React from "react";
import { Container } from "react-bootstrap";

const Volunteer = () => {
  return (
    <Container>
      <div className="my-5">
        <h1>Volunteer</h1>
        <h2>Long-term Volunteers</h2>
        <p>
          There is a great need for trained physiotherapists, occupational
          therapists and speech and language therapists to work at Physio Care.
          If coming for a longer period (six months or more), it would be
          desirable to have at least two years' post graduate experience.
          Lecturing experience is not required and all courses are taken in
          English. Examples of other professional posts are Bio-medical
          Scientist or Radiologist.
        </p>
      </div>
      <h2>Short-term Volunteers</h2>
      <p>
        {" "}
        Usually, a volunteer will have special interests or skills which lead
        him or her to work in a specific area. However, the need to be flexible
        and use one's initiative is very important. For prospective short-term
        volunteers it should be stressed that there are very many mundane tasks
        to be done. Five days a week there are sports activities for patients in
        the afternoon. This is popular among volunteers who help organising
        different games, and often participate themselves. Activities include
        wheelchair basketball, archery, darts and skittles.
      </p>
    </Container>
  );
};

export default Volunteer;
