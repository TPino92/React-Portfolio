import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns offset-1">
              <p className="lead">
              Please contact me trevorpino@yahoo.com
              <br>
              </br>
              or any of the links below
              </p>
            </div>
          </div>
        </section>
        );
  }
}