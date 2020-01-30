import React, { Component } from "react";
import "./layout.css";
import "react-bulma-components/dist/react-bulma-components.min.css";

import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Menu } from "../menu/menu";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../home/home";
import { Products } from "../products/products";
// import { About } from "../about/about";
import { PageNotFound } from "../page-not-found/page-not-found";

export class Layout extends Component {
  public render(): JSX.Element {
    return (
      <div className="layout container is-fullhd">
        <header className="layout container">
          <Header />
        </header>

        <section className="columns">
          <aside className="column is-2">
            <Menu />
          </aside>

          <main className="column">
            <BrowserRouter>
              <Switch>
                <Route path="/home" component={Home} exact />
                <Route path="/products" component={Products} exact />
                {/* <Route path="/about" component={About} exact /> */}
                <Redirect from="/" to="/home" exact />
                <Route component={PageNotFound} />
              </Switch>
            </BrowserRouter>
          </main>
        </section>
        <footer className="content has-text-centered container is-fullhd">
          <Footer />
        </footer>
      </div>
    );
  }
}
