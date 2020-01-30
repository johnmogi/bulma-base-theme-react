import React, { Component } from "react";
import "./heading.css";

export class Heading extends Component {
    public render(): JSX.Element {
        return (
            <div className="heading">
                <h2>

                    &rarr;

                    {this.props.children}

                    &larr;

                </h2>
            </div>
        );
    }
}