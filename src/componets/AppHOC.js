import React from "react";

const withColor = Element => ({color, ...otherProps}) => (
    <Element {...otherProps} style={{backgroundColor: color}}/>
);

const Button = props => {
    return <button {...props} />;
};

const ColoredButton = withColor(Button);

export default function AppHOC() {
    return(
        <div className="App">
            <h1>Hello</h1>
            <ColoredButton color="red">
                Ja sam zut!
            </ColoredButton><br/>
            <ColoredButton color="yellow">
                Ja sam zut!
            </ColoredButton><br/>
            <ColoredButton color="blue">
                Ja sam zut!
            </ColoredButton><br/>
        </div>
    );
}