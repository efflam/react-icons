
var React = require('react');
var IconBase = require('../IconBase');

export default class TiDevicePhone extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><g><path d="M15 3h-7c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3zm1 15c0 .551-.449 1-1 1h-7c-.551 0-1-.449-1-1v-12c0-.551.449-1 1-1h7c.551 0 1 .449 1 1v12zM14 6h-5c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1.5c0 .553.448 1 1 1s1-.447 1-1h1.5c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm0 10h-5v-9h5v9z"/></g></g>
            </IconBase>
        );
    }
}
