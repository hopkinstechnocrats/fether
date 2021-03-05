import React, { Component } from 'react';
import './Profile.css';
import RoundBox from './RoundBox.js';

function Profile() {
  return(
    <div className="Profile">
      <center> <h2>Profile</h2>
      <span class="dot"></span>
      <h3>Taylor S.</h3>
      <p>West Redding, PA
      <br />Bio</p>
      <table>
        <tr>
          <th>Age</th>
          <th>Favorite Forms of Exercise</th>
        </tr>
        <tr>
          <td>31</td>
          <td>Skiing, Roller Skating, Biking</td>
        </tr>
      </table> </center>
      <RoundBox color="grey scrollbox">
        <RoundBox color="teal">
          <h3>Hosted Events</h3>
          <p><b>Valentines Walk</b>
          <br/>February 14, 2021
          <br/>West Redding, PA
          <br/>3 miles
          <br/>18 min./mile
          </p>
        </RoundBox>
        <RoundBox color="teal">
          <h3>Participated Events</h3>
          <p><b>Sunday Morning Bike</b>
          <br/>June 23, 2020
          <br/>West Reading, PA
          <br/>15 miles
          <br/>4:15 min./mile
          </p>
          <p><b>Runs for Women</b>
          <br/>September 3, 2020
          <br/>West Reading, PA
          <br/>5 miles
          <br/>7:45 min./mile
          </p>
        </RoundBox>
      </RoundBox>
    </div>
  );
}

export default Profile;