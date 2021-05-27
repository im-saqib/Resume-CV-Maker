import React, { Component } from "react";

import HomePage from "./components/Welcome";

import PersonalDetails from "./components/forms/PersonalDetails";
import EducationalDetails from "./components/forms/EducationalDetails";
import ExperienceDetails from "./components/forms/ExperienceDetails";
import OtherDetails from "./components/forms/OtherDetails";
import UploadPhoto from "./components/forms/UploadPhoto";
import Confirm from "./components/forms/Confirm";
import PrintPdf from "./components/forms/PrintPdf";
import Error from "./components/Error";

export default class App extends Component {
  state = {
    step: 1,
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <HomePage nextStep={this.nextStep} />;
      case 2:
        return (
          <PersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 3:
        return (
          <EducationalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return (
          <ExperienceDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 5:
        return (
          <OtherDetails nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 6:
        return (
          <UploadPhoto nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 7:
        return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} />;
      case 8:
        return <PrintPdf prevStep={this.prevStep} />;
      default:
        return <Error />;
    }
  }
}
