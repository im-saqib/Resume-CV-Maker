import React, { Component } from "react";

import HomePage from "./components/Welcome";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

import PersonalDetails from "./components/forms/PersonalDetails";
import EducationalDetails from "./components/forms/EducationalDetails";
import ExperienceDetails from "./components/forms/ExperienceDetails";
import OtherDetails from "./components/forms/OtherDetails";
import UploadPhoto from "./components/forms/UploadPhoto";
import Confirm from "./components/forms/Confirm";
import PrintPdf from "./components/forms/PrintPdf";
import Error from "./components/Error";

import initialValues from "./components/models/resumeScehma";

export default class App extends Component {
  state = {
    step: 1,
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
  initialValues = initialValues;
  onSubmit = (values) => {
    this.setState({
      data: { values },
    });
    // *** Helpful for debugging ***
    // console.log("Form data", values);
    // const { data } = this.state;
    // console.log("State ", data);
  };

  render() {
    const { step, data } = this.state;
    const { values } = data;

    switch (step) {
      case 1:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <HomePage nextStep={this.nextStep} />
            </Formik>
          </div>
        );
      case 2:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <PersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              />
            </Formik>
          </div>
        );
      case 3:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <EducationalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              />
            </Formik>
          </div>
        );
      case 4:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <ExperienceDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              />
            </Formik>
          </div>
        );
      case 5:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <OtherDetails nextStep={this.nextStep} prevStep={this.prevStep} />
            </Formik>
          </div>
        );
      case 6:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <UploadPhoto nextStep={this.nextStep} prevStep={this.prevStep} />
            </Formik>
          </div>
        );
      case 7:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <Confirm
                values={values}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
              />
            </Formik>
          </div>
        );
      case 8:
        return (
          <div>
            <Formik
              initialValues={initialValues}
              // validationSchema={this.validationSchema}
              onSubmit={this.onSubmit}
            >
              <PrintPdf nextStep={this.nextStep} prevStep={this.prevStep} />
            </Formik>
          </div>
        );
      default:
        return <Error />;
    }
  }
}
