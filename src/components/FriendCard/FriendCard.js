import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <div className="card">
    <img className="card-image-overlay square" onClick={() => props.clickFriend(props.id)} src={props.image} alt={props.name} />
  </div>
);

export default FriendCard;
