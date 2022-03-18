import React from "react";


class TopCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = false;
        this.handleClick = this.handleClick.bind(this);
    }

    /***
     * Changes the state of flipped, which controls
     * which side of the tile is shown.
     */
    handleClick = () => {
        this.setState({ flipped: !this.state.flipped });
    }

    render() {

        // Constants made here so that they may be used to dynamically
        // generate image components
        const Site = this.props.img;
        const Arrow = this.props.arrow;

        return(
        <div>
            <div className={"topCard" + (this.state.flipped ? " flipped" : "")} id={this.props.id} onClick={this.handleClick}>
                <div id={"front"}>
                    <div className="topCardHeader" id={this.props.hId}></div>
                    <b className={"cardText"}>{this.props.number}</b>
                    <span className={"followers"}>{this.props.description}</span>
                    <Site className={"cardImg"}/>
                    <span className={"tag"}>{this.props.tag}</span>
                    <Arrow className={"upBigCard"}/>
                    <span className={"changeCount"} id={this.props.colorId}>{this.props.change}</span>
                </div>

                <div id={"back"}>
                    <div className="topCardHeader" id={this.props.hId}></div>
                    <span className={"backText"} >Year to Date {this.props.object}</span>
                    <hr className={"backHr"} color={"grey"} />
                    <img className={"backGraph"} alt={"cardBackGraphs"} src={this.props.backImg}/>
                </div>
            </div>
        </div>
        )
    }
}

export default TopCard;