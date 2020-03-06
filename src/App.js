import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // .setState 에 미리 선언하지 않은 state 변수가 들어가면 에러날까요?
  // No. 그러니까 state 에 미래에서 사용 할 변수를 미리 선언하지 않아도 됩니다.
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
