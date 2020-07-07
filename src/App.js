import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import "./App.css";
import Form from "./Form";
import Table from "./Table";

injectTapEventPlugin();

class App extends Component {
  state = {
    data: [],
    editIdx: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };


  startEditing = i => {
    this.setState({ editIdx: i});
  };

  stopEditing = i => {
    this.setState({ editIdx: -1});
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data:state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <section classname="App">
          <Form onSubmit={submission => this.setState({
            data: [...this.state.data, submission]
          })}
          />
          <Table 
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            data={this.state.data}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
              {
                name: "occupation",
                prop: "occupation"
              },
              {
                name: "email",
                prop: "email"
              }
            ]}
          />
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;