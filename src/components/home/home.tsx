import React, { Component } from "react";
import { Heading } from "../heading/heading";
import Button from '@material-ui/core/Button';
// import Modal from '@material-ui/core/Modal';


import "./home.css";

export class Home extends Component {
  public render(): JSX.Element {
    return (
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <Heading>
                {this.isWinter() && (
                  <h1 className="title is-1">Wellcome Home</h1>
                )}
              </Heading>
            </h1>
            <Button variant="contained" color="primary">
      Hello World
    </Button>
          </div>
        </div>
      </section>
    );
  }

  private isWinter(): boolean {
    const date = new Date();
    const month = date.getMonth() + 1;
    return month === 12 || month <= 3;
  }

  //   private isSummer(): boolean {
  //     const date = new Date();
  //     const month = date.getMonth() + 1;
  //     return month >= 6 && month <= 9;
  //   }
}
