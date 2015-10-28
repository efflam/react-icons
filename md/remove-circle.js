
var React = require('react');
var IconBase = require('../IconBase');

export default class MdRemoveCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></g>
            </IconBase>
        );
    }
}
