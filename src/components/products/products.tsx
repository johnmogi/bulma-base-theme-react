import React, { Component } from "react";
import "./products.css";
import { Heading } from "../heading/heading";
import { ProductModel } from "../../models/product-model";
import { Thumbnail } from "../thumbnail/thumbnail";

interface ProductsState {
  products: ProductModel[];
  hoverImage: string;
}

export class Products extends Component<any, ProductsState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      hoverImage: ""
    };
  }

  public componentDidMount(): void {
    fetch("http://localhost:3015/products")
      .then(response => response.json()) // Convert to JSON
      .then(products => this.setState({ products }))
      .catch(err => alert(err.message));
  }

  public render(): JSX.Element {
    return (
      <div className="products">
        <Heading>Here are our {this.state.products.length} products:</Heading>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>${p.price.toFixed(2)}</td>
                <td>{p.stock ? p.stock : "---"}</td>
                {/* <td>{this.formatStock(p.stock)}</td> */}
                <td>
                  <Thumbnail
                    imageSource={`/assets/images/products/${p.id}.jpg`}
                    imageWidth={80}
                    imageHeight={80}
                    enter={this.displayPreview}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <img className="preview" src={this.state.hoverImage} />
      </div>
    );
  }

  // props-הביא לו אותה ב Parent-הולך לקרוא לפונקציה הזו כי ה Child-ה
  private displayPreview = (imageSource: string) => {
    this.setState({ hoverImage: imageSource });
  };

  // private formatStock(stock: number): string {
  //     return stock ? stock.toString() : "---";
  // }
}
