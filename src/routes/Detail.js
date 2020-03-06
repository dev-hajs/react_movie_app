import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // 라우터를 통해 넘어온게 아니라면(state 가 비어있음) home 으로 강제 리다리렉트
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;