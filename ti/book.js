
var React = require('react');
var IconBase = require('../IconBase');

export default class TiBook extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M18 3h-11c-.265 0-.52.105-.707.293l-3 3-.057.062c-.139.165-.225.373-.235.6l-.001.053v10.992c0 1.654 1.346 3 3 3h9c1.304 0 2.416-.836 2.829-2h.671c1.402 0 2.5-1.317 2.5-3v-10c0-1.654-1.346-3-3-3zm-12 16c-.551 0-1-.448-1-1v-10h2v11h-1zm10-1c0 .552-.449 1-1 1h-7v-11h7c.551 0 1 .448 1 1v9zm3-2c0 .62-.324 1-.5 1h-.5v-8c0-1.654-1.346-3-3-3h-8.586l1-1h10.586c.551 0 1 .448 1 1v10z"/></g>
            </IconBase>
        );
    }
}
