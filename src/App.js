import React, { Component } from "react";

import HomePage from "./components/Welcome";

import { ThemeProvider } from "@material-ui/core";
import { Formik } from "formik";

// Forms
import PersonalDetails from "./components/forms/PersonalDetails";
import EducationalDetails from "./components/forms/EducationalDetails";
import ExperienceDetails from "./components/forms/ExperienceDetails";
import OtherDetails from "./components/forms/OtherDetails";
import UploadPhoto from "./components/forms/UploadPhoto";
import Confirm from "./components/forms/Confirm";
import Error from "./components/Error";
import Menu from "./components/AppMenu";
import HowTo from "./components/forms/HowTo";

import initialValues from "./components/models/resumeScehma";

import theme from "./components/theme.js";
import LayoutOne from "./components/forms/LayoutOne";
import LayoutTwo from "./components/forms/LayoutTwo";
import Selection from "./components/Selection";

export default class App extends Component {
  state = {
    step: 0,
    data: "",
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
  selection = () => {
    this.setState({
      step: 8,
    });
  };
  layOutOne = () => {
    this.setState({
      step: 9,
    });
  };
  layOutTwo = () => {
    this.setState({
      step: 10,
    });
  };
  initialValues = initialValues;
  onSubmit = (values) => {
    this.setState({
      data: { values },
    });
    this.nextStep();
    // *** Helpful for debugging ***
    // console.log("Form data", values);
    // const { data } = this.state;
    // console.log("State ", data);
  };

  render() {
    const { step, data } = this.state;
    const { values } = data;
    switch (step) {
      case 0:
        return (
          <div>
            {/* <Menu value={step} /> */}
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <HomePage nextStep={this.nextStep} />
            </Formik>
          </div>
        );
      case 1:
        return (
          <div>
            {/* <Menu value={step} /> */}
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <HowTo nextStep={this.nextStep} prevStep={this.prevStep} />
            </Formik>
          </div>
        );
      case 2:
        return (
          <div>
            <Menu value={step} />
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <ThemeProvider theme={theme}>
                <PersonalDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              </ThemeProvider>
            </Formik>
          </div>
        );
      case 3:
        return (
          <div>
            <Menu value={step} />
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <ThemeProvider theme={theme}>
                <EducationalDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              </ThemeProvider>
            </Formik>
          </div>
        );
      case 4:
        return (
          <div>
            <Menu value={step} />
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <ThemeProvider theme={theme}>
                <ExperienceDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              </ThemeProvider>
            </Formik>
          </div>
        );
      case 5:
        return (
          <div>
            <Menu value={step} />
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <ThemeProvider theme={theme}>
                <OtherDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              </ThemeProvider>
            </Formik>
          </div>
        );
      case 6:
        return (
          <div>
            <Menu value={step} />
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <ThemeProvider theme={theme}>
                <UploadPhoto
                  values={values}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              </ThemeProvider>
            </Formik>
          </div>
        );
      case 7:
        return (
          <div>
            <Menu value={step} />
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <ThemeProvider theme={theme}>
                <Confirm
                  values={values}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              </ThemeProvider>
            </Formik>
          </div>
        );
      case 8:
        return (
          <div>
            <Menu value={step} />
            <Formik initialValues={initialValues} onSubmit={this.onSubmit}>
              <Selection
                prevStep={this.prevStep}
                layOutOne={this.layOutOne}
                layOutTwo={this.layOutTwo}
                values={values}
              />
            </Formik>
          </div>
        );
      case 9: {
        return (
          <div>
            <Formik>
              <ThemeProvider theme={theme}>
                <LayoutOne values={values} selection={this.selection} />
              </ThemeProvider>
            </Formik>
          </div>
        );
      }
      case 10: {
        return (
          <div>
            <Formik>
              <ThemeProvider theme={theme}>
                <LayoutTwo values={values} selection={this.selection} />
              </ThemeProvider>
            </Formik>
          </div>
        );
      }
      default:
        return <Error />;
    }
  }
}
