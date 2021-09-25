import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ListItems from "./ListItems";
import Dropdown from "./Components/Dropdown";
import Accordion from "./Components/Accordion"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        title: "What is React?",
        content: "React is a front end javascript framework",
      },
      {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers",
      },
      {
        title: "How do you use React?",
        content: "You use React by creating components",
      },
    ];
  
    this.options = [
      
      {
        label: "Light",
        value: "#F0E68C",
        secondary: "#FFF8DC"
      },
      {
        label: "Dark",
        value: "#2E201B",
        secondary:"#2F4F4F"
      },
      {
        label: "The color red",
        value: "#4169E1",
        secondary:"#B0E0E6"
      },
     
     
    ];

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
      selected: this.options[0]
    };
  }

  setSelected = (value) => {
    this.setState({ selected: value });
  };
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
      //  console.log(items)
    } 
  };
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  deleteItem = (key) => {
    const newList = this.state.items.filter((item) => {
      if (item.key != key) {
        return item;
      }
    });
    this.setState({ items: newList });
  };

  deleteAll = () => {
    this.setState({ items: [] });
  };

  setUpdate = (value, key) => {
    const n = this.state.items.map((item) => {
      if (item.key == key) {
        item.text = value;
      }
      return item;
    });
    this.setState({ items: n });
  };

  render() {
    document.querySelector("body").style.backgroundColor =
      this.state.selected.value;
    return (
      <div style={{ backgroundColor: this.state.selected.value }}>
        <div class="ui menu">
          <br />
          <h5 className="ui center aligned icon header">
            <i class="circular users icon"></i>
            <h3> ToDo-List</h3>
          </h5>
          <div class="header item">Theme</div>
          <div class="ui item">
            {
              <Dropdown
                label={"Choose a color"}
                selected={this.state.selected}
                onSelectedChange={this.setSelected}
                options={this.options}
              />
            }
          </div>
        </div>

        <div className="App" style={{backgroundColor:this.state.selected.secondary}}>
          <br />

          <header className="ui center aligned icon header">
            <form id="to-do-form" onSubmit={this.addItem}>
              <div class="ui input">
                <input
                  type="text"
                  placeholder="enter text"
                  value={this.state.currentItem.text}
                  onChange={this.handleInput}
                ></input>
                <div class="ui buttons">
                  <button type="submit" class="ui positive button">
                    Add
                  </button>
                  <div class="or"></div>
                  <button onClick={this.deleteAll} class="ui button">
                    Delete All
                  </button>
                </div>
              </div>

              {/* <button type="submit">Add</button>
          <button type="submit">Delete</button> */}
            </form>
          </header>
<br/>
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
