import React, { Component } from "react";
import "./menu.css";

export class Menu extends Component {
  public render(): JSX.Element {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
    );
  }
}
