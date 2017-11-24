import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from '../components/MaterializeRaisedButton.js';
import {Link} from 'react-router-dom';
import '../styles/inputFile.css';
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};


class ServiceRequest extends Component {
  constructor (props) {
    super(props);
    this.singleLineFields = ['Name', 'Email', 'Phone', 'Department'];
    this.multiLineFields = [
      'Project Description',
      'Project Goal',
      'Project Budget',
      'Key Messages',
      'Primary Target Audience',
      'Secondary Target Audience',
      'Project Contact (if other than yourself)',
      'Comments'
    ]
    this.leftCheckboxes = [
      'Simple1',
      'Simple2',
      'Simple3',
      'Simple4',
      'Simple5',
      'Simple6'
    ]

    this.rightCheckboxes = [
      'Simple7',
      'Simple8',
      'Simple9',
      'Simple10',
      'Simple11',
      'Simple12'
    ]
    const stringProps = [
      ...this.singleLineFields,
      ...this.multiLineFields
    ].reduce(
      (acc, label) => ({
        [this.formatLabelToProperty(label)]: '',
        ...acc
      }),
      {}
    )
    const checkboxProps = [
      ...this.leftCheckboxes,
      ...this.rightCheckboxes
    ].reduce(
      (acc, label) => ({
        [this.formatLabelToProperty(label)]: false,
        ...acc
      }),
      {}
    )
    this.state = {
      fileInput: null
    }
    Object.assign(this.state, stringProps, checkboxProps)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  formatLabelToProperty = label => label.split(' (')[0].toLowerCase().split(' ').join('-');

  handleFilePath = () => {
    let file = document.getElementById('upload').files;
    if(file.length === 0) {
      this.setState({
        fileInput: null
      });
    }else {
      let fileNames = '';
      for (let i = 0; i < file.length; i++) {
        fileNames = fileNames + file[i].name + ', '
      }
      this.setState({
        fileInput: fileNames
      })
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

    render() {
      const fileValue = this.state.fileInput || 'Select a file to upload'
      const SingleLineField = (label, index) =>
        <div className='col s12 m6' key={index}>
          <TextField
            floatingLabelText={label}
            name={this.formatLabelToProperty(label)}
            value={this.state[this.formatLabelToProperty(label)]}
            onChange={this.handleInputChange}
            fullWidth
          />
        </div>

       const MultiLineField = (label, index) =>
        <div className='col s12 m6' key={index}>
          <TextField
            floatingLabelText={label}
            name={this.formatLabelToProperty(label)}
            value={this.state[this.formatLabelToProperty(label)]}
            onChange={this.handleInputChange}
            multiLine
            rows={2}
            fullWidth
          />
        </div>

      const CheckboxField = (label, index) =>
        <Checkbox
          label={label}
          name={this.formatLabelToProperty(label)}
          key={index}
          onClick={this.handleInputChange}
          style={styles.checkbox}
        />

      return (
        <div className='container'>
          <div className='row'>
            <div className='col s12 flow-text'>
              <h2>Please use this form to request services.</h2>
            </div>
          </div>

          <div className='row'>
            {this.singleLineFields.map((label, index) => SingleLineField(label, index))}
            {this.multiLineFields.map((label, index) => MultiLineField(label, index))}

            <div className='col s12 m6'>
              <DatePicker hintText='Desired Completion Date' />
            </div>
            <div className='col s12 m6 file-upload'>
              <div className='file-field input-filed'>
                <div className='btn'>
                  <span>Upload Files</span>
                  <input
                    id='upload'
                    type='file'
                    multiple
                    onChange={this.handleFilePath}
                  />
                </div>
                <div className='file-path-wrapper'>
                  <input
                    value={fileValue}
                    className='file-path validate'
                    type='text'
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className='col s12 m6'>
              {this.leftCheckboxes.map((label, index) => CheckboxField(label, index))}
            </div>
            <div className='col s12 planning-guide-checkbox'>
              <RaisedButton label='Submit' primary />
              <Checkbox
                label={
                  <span>
                  I have read the {' '}
                  <Link
                  to='/planning-guide'
                  target='_blank'
                  style={{fontWeight: 500}}
                  >
                  Planning Guide
                  </Link>
              </span>
                      }
                style={styles.checkbox}
                inputStyle={{width: '35px'}}
                />
          </div>
          </div>
        </div>
      )
    };
}
export default ServiceRequest;
