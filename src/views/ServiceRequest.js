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
    this.handleInputChange = this.handleInputChange.bind(this);
  }
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
      let fileValue = this.state.fileInput || 'Selcet a file to upload'
      return (
        <div className='container'>
        <div className='row'>
          <div className='col s12 flow-text'>
            <h2>Plesde use this from to request Service.</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <TextField
      floatingLabelText="Name" name="name"
              value={this.state.name} onChange={this.handleInputChange}
        fullWidth
    />
          </div>
          <div className='col s12 m6'>
            <TextField
      floatingLabelText="Email" name="email"
              fullWidth
    />
          </div>
          <div className='col s12 m6'>
            <TextField
      floatingLabelText="Phone" name="phone"
        fullWidth
    />
          </div>
          <div className='col s12 m6'>
            <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
              fullWidth
    />
          </div>
          <div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
          <div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
<div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
<div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
<div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
<div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
<div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
<div className='col s12 m6 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
          <div className='col s12 m6'>
               <DatePicker hintText="Portrait Dialog" />
          </div>
          <div className='col s12 m6'>
            <div className='file-field input-field'>
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
          <div className="col s12 m6">
                    <Checkbox
          label="Simple" style={styles.checkbox}
        />
                <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />
          </div>
          <div className="col s12 m6">
                    <Checkbox
          label="Simple" style={styles.checkbox}
        />
                <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />        <Checkbox
          label="Simple" style={styles.checkbox}
        />
          </div>
        {/* 
            <div className='col s12'>
            <RaisedButton label="Submit" primary={true} />
            <Checkbox
            label="Simple" style={styles.checkbox}
            />
            </div> */}
          <div className='col s12'>
            <RaisedButton label='Submit' primary />
            <Checkbox
              label={
                <span>
                  I have read the{' '}
                  <Link to='/planning-guide' style={{ fontWeight: 500 }}>
                    Planning Guide
                  </Link>
                </span>
              }
              style={styles.checkbox}
              inputStyle={{ width: '35px' }}
            />
          </div>
        </div>
      </div>

      );
    };
}
export default ServiceRequest;
