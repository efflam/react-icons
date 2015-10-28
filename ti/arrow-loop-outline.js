
var React = require('react');
var IconBase = require('../IconBase');

export default class TiArrowLoopOutline extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M18.994 7.187l.006-.187c0-.801-.312-1.555-.879-2.121-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-2.883 2.883c-.531-.474-1.23-.762-1.996-.762h-1c-3.859 0-7 3.14-7 7s3.141 7 7 7h9c3.859 0 7-3.14 7-7 0-3.306-2.14-6.084-5.006-6.813zm-1.994 11.813h-9c-2.757 0-5-2.243-5-5s2.243-5 5-5h1c.553 0 1 .448 1 1s-.447 1-1 1h-1c-1.654 0-3 1.346-3 3s1.346 3 3 3h9c1.654 0 3-1.346 3-3s-1.121-3-2.5-3h-2.086l1.293 1.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.707-3.707 3.707-3.707c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-1.293 1.293h2.086c2.481 0 4.5 2.243 4.5 5s-2.243 5-5 5zm.749-6.971c.7.164 1.251 1 1.251 1.971 0 1.103-.897 2-2 2h-9c-1.103 0-2-.897-2-2s.897-2 2-2h1c.856 0 1.588-.541 1.873-1.299l3.713 3.713c.378.378.88.586 1.414.586s1.036-.208 1.414-.586.586-.88.586-1.414c0-.345-.087-.677-.251-.971z"/></g>
            </IconBase>
        );
    }
}
