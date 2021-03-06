import React, { Component } from "react";
import "./page-not-found.css";
import { Heading } from "../heading/heading";

export class PageNotFound extends Component {
    public render(): JSX.Element {
        return (
            <div className="page-not-found">
                <Heading>The page you are looking for doesn't exist</Heading>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=1" allow="autoplay" title="Page not Found"></iframe>


            </div>
        );
    }
}
