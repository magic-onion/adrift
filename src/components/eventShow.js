import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class EventShow extends Component {
  constructor(props) {
   super(props);
   this.canvasRef = React.createRef();
 }
 componentDidUpdate() {
   // Draws a square in the middle of the canvas rotated
   // around the centre by this.props.angle
   const { angle } = this.props;
   const canvas = this.canvasRef.current;
   const ctx = canvas.getContext('2d');
   const width = canvas.width;
   const height = canvas.height;
   ctx.save();
   ctx.beginPath();
   ctx.clearRect(0, 0, width, height);
   ctx.translate(width / 2, height / 2);
   ctx.rotate((angle * Math.PI) / 205);
   ctx.fillStyle = '#4397AC';
   ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
   ctx.restore();
 }
 render() {
   return <canvas className="drawing" width="500" height="500" ref={this.canvasRef} />;
 }
}
