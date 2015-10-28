
var React = require('react');
var IconBase = require('../IconBase');

export default class TiCalculator extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M17 21h-8c-1.7 0-3-1.3-3-3v-12c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zm-8-16c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-12c0-.6-.4-1-1-1h-8z"/><circle cx="10" cy="11" r="1"/><circle cx="13" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><circle cx="10" cy="14" r="1"/><circle cx="13" cy="14" r="1"/><circle cx="16" cy="14" r="1"/><circle cx="10" cy="17" r="1"/><circle cx="13" cy="17" r="1"/><circle cx="16" cy="17" r="1"/><path d="M16 7v1h-6v-1h6m1-1h-8v3h8v-3z"/></g>
            </IconBase>
        );
    }
}
