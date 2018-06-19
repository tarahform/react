import React from "react";
// importing the component FriendCard from the components file
import FriendCard from "./components/FriendCard";
// importing the component Wrapper from the components file
import Wrapper from "./components/Wrapper";
// importing the array of objects in friends.json
import friends from "./friends.json";
// importing the component Title from the components file
import Title from "./components/Title/title";
// importing the component Footer from the components file
import Footer from "./components/Footer";
// applying styling
import "./index.css";

// stateful component --> also known as a smart component 
class App extends React.Component {
  state = {
    friends,
    click: [],
    score: 0,
    high: 0
  }

  getNewID = () => {
    const arr = []
    while (arr.length < 12) {
      var randomnumber = Math.floor(Math.random() * 12) + 1;
      if (arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
    }
    return arr;
  }

  getClick = (id) => {
    var name = "";
    for (let j = 0; j < this.state.friends.length; j++) {
      if (id === this.state.friends[j].id) {
        name = this.state.friends[j].name;
      }
    }
    return name;
  }

  shuffle = () => {
    var newID = this.getNewID();
    var friends = this.state.friends.map((friend, i) => {
      //click value a score keeper ->name
      friend.id = newID[i];
      return friend;
    });
    friends.sort((a, b) => a.id - b.id)
    //Counter.handleIncrement();
    this.setState({ friends });
  }

  clickFriend = (id) => {
    if (this.state.click.indexOf(this.getClick(id)) === -1) {
      var score = this.state.score + 1;
      // console.log(this.state.score);
      var high;
      if (score > this.state.high) {
        high = score;
        // console.log(this.state.high);
      } else {
        high = this.state.high;
      }
      //this.state.click.push(this.getClick(id)); // let new click = click.push .... then set state
      let newClick = this.state.click;
      newClick.push(this.getClick(id));
      this.setState({ click: newClick, score: score, high: high });
      // console.log(this.state.click);
      this.shuffle();
      if (score === 12) {
        alert("You Win!");
      }
    } else {
      alert("Game Over");
      this.setState({ click: [], score: 0 })
    }
  }

  render() {
    return (
      <div id="bodyDiv">
        {/* created Title and Footer just for practice with components and props */}
        <Title name="Rick" />
        <div className="row" id="scoreDiv">
          <div className="col-md-12">
            <p>Click Count: {this.state.score}</p><br />
            <p>Top Score: {this.state.high}</p>
          </div>
        </div>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              // functions being called from above
              getClick={this.getClick}
              clickFriend={this.clickFriend}
              getNewID={this.getNewID}
              // props from FriendCard
              id={friend.id}
              key={friend.id} //reserved for react - not for use as a prop
              image={friend.image}
            />
          ))
          }
        </Wrapper>
        <Footer name="Tarah Dactyl" />
      </div>
    )
  }
};

export default App;
