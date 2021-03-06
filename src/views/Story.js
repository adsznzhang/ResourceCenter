import React, {Component} from 'react';
import '../styles/responsive-text.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Story extends Component {
    render() {
      return (
        <div className='container'>
        <div className='row'>
          <div className='col s12 flow-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
          <div className='col s12 '>
            <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
              fullWidth
      multiLine={true}
      rows={2}
    />
          </div>
          <div className='col s12'>
            <RaisedButton label="Submit" primary={true} />
          </div>
        </div>
      </div>

      )
    };
}
export default Story;
