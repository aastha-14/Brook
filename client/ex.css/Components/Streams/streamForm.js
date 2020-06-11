import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class StreamForm extends Component {
  renderError({error, touched}) {
    if(touched && error){
      return(
        <div className="ui field error ">
          <div className="ui basic pointing propmpt label transition visible" style={{color:'#9f3a38', borderColor: '#e0b4b4'}}>{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues =>{
    this.props.onSubmit(formValues);
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
        <Link to='/' className="ui button">Cancel</Link>
      </form>
    );
  }
};

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title){
    errors.title = "Please enter a title";
  }

  if(!formValues.description){
    errors.description = "Please enter a description";
  }
  return errors
}

export default reduxForm({
  form: 'streamForm', validate
})(StreamForm);
