import React, { Component } from 'react';
import './Profile.css';
import RoundBox from './RoundBox.js';

function Profile() {
  return(
    <div className="Profile">
      <h2>Profile</h2>
      <span class="dot"></span>
<<<<<<< HEAD
<<<<<<< HEAD
      <h3>Taylor S.</h3>
      <p>West Redding, PA
      <br>Bio</p>
=======
      <h3>Name</h3>
      <p>City, State
      <br/>Bio</p>
>>>>>>> 49f47f47a94ae5ce8cfa6e1d8a5ce23b3f815bec
=======
      <h3>Name</h3>
      <p>City, State
      <br/>Bio</p>
>>>>>>> 27829caa57f883b0ac931d633ca4590e0f556f53
      <table>
        <tr>
          <th>Age</th>
          <th>Favorite Forms of Exercise</th>
        </tr>
        <tr>
          <td>31</td>
          <td>Skiing, Roller Skating, Biking</td>
        </tr>
      </table>
      <RoundBox color="grey">
        <h4>Hosted Events</h4>
        <p><b>Valentines Walk</b>
        <br/>February 14, 2021
        <br/>West Redding, PA
        <br/>3 miles
        <br/>18 min./mile
        </p>
      </RoundBox>
    </div>
  );
}

export default Profile;