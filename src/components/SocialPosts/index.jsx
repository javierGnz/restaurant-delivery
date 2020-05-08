import React, { Component } from "react";
import "./styles.scss";

export class SocialPosts extends Component {
  render() {
    return (
      <>
        {this.props.posts.map(({ id, img, alt, link }) => {
          return (
            <div key={id} className="col-lg-3 col-md-6">
              <a href={link} target="_blank" className="social-post">
                <img className="social-post__bg" src={img} alt={alt} />
              </a>
            </div>
          );
        })}
      </>
    );
  }
}

export default SocialPosts;
