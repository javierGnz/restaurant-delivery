import React, { Component } from "react";
import "./styles.scss";

export class Category extends Component {
  constructor() {
    super();
    this.state = {
      history: "",
    };
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory = () => {
    console.log('click !');
  }

  render() {
    return (
      <>
        {this.props.categories.map(({ id, img, name }) => {
          return (
            <div
              key={id}
              className="col-lg-4 col-md-6"
            >
              <div
                className="category"
                onClick={this.handleCategory}
              >
                <img
                  className="category__bg"
                  src={img}
                  alt={name}
                />
                <h4 className="category__name">{name}</h4>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Category;
