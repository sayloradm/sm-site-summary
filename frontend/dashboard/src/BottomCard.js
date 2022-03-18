import React from 'react';

class BottomCard extends React.Component {
    
    render() {

        // Constants here so that they may be used to dynamically
        // generate image components
        const Site = this.props.img;
        const Arrow = this.props.arrow

        return(
        <div>
            <div className={"bottomCard"} id={this.props.id}>
                <b className={"cardText"} id="bottomNumber">{this.props.number}</b>
                <Site className={"cardImg"} id="bottomImg"/>
                <span className={"tag"} id="bottomText">{this.props.description}</span>
                <Arrow className={"upSmallCard"}/>
                <span className={"changeCount"} id={this.props.colorId}>{this.props.percent}</span>
                </div>
        </div>
        )
    }
}

export default BottomCard;