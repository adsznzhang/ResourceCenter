import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};


class ServiceRequest extends Component {
    render() {
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
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
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
          <div className='col s12 m6'>
            <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
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
               <DatePicker hintText="Portrait Dialog" />
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

          <div className='col s12'>
            <RaisedButton label="Submit" primary={true} />
                   <Checkbox
          label="Simple" style={styles.checkbox}
        />
          </div>
        </div>
      </div>

      );
    };
}
export default ServiceRequest;
