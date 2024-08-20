import React from "react";

class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  componentDidMount() {
    console.log("montou agora");
  }

  componentDidUpdate() {
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    console.log("desmontou");
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produto;
//   onClick={() => this.setState({ contar: this.state.contar + 1 })}

// () =>
//     this.setState((state) => ({
//       contar: state.contar + 1,
//     }))
