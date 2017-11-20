import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/video.css';

class Tutorial extends Component {
  constructor (props) {
    super(props);
    this.state = {
      topCoord: null
    };
  }

  componentDidMount () {
    const thisElement = ReactDOM.findDOMNode(this);
    const top = thisElement.getBoundingClientRect().top
    this.setState({
      topCoord: top
    })
  }

  render () {
    return (
      <div className='container'>
      <div className='row' style={{marginBottom: 0}}>
      <div className='col s12 valign-wrapper' style={{minHeight:`calc(100vh - ${this.state.topCoord || '64'})`}}>
      <div style={{width: '100%'}}>
      <div className='video-container z-depth-1'>
      <iframe
                  src='https://www.youtube.com/embed/WQt0GDsL8ZU?rel=0'
                  width='853'
                  height='480'
                  frameBorder='0'
                  allowFullScreen='allowfullscreen'
                  title='tutorial-video'
                />
      </div>
      <p style={{marginTop: '20px'}}>if you have any problems using the MarCom Resource Center please contact Jesse Weigel
      <a href='mailto:adszn@hotmail.com'>
      adszn@hotmail.com
      </a>
      </p>
      </div>
      </div>
      </div>
      </div>
    )
  }
}




export default Tutorial;
