import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Letterhead extends Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12">
              <p>Lores sdff sdf</p>
            </div>
          </div>
        <div className="row">
          <div className="col s12 m6">
         <Card>
           <CardMedia>
      <img src="https://picsum.photos/600/776/?random" alt="" />
    </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardActions>
      <FlatButton label="Action1" />
         </CardActions>
        </Card>   
          </div>
          <div className="col s12 m6">
            <Card>
              <CardMedia>
      <img src="https://picsum.photos/600/776/?random" alt="" />
    </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardActions>
    <FlatButton label="Action1" />
    </CardActions>
        </Card>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
         <Card>
           <CardMedia>
      <img src="https://picsum.photos/600/776/?random" alt="" />
    </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardActions>
      <FlatButton label="Action1" />
         </CardActions>
        </Card>   
          </div>
          <div className="col s12 m6">
            <Card>
              <CardMedia>
      <img src="https://picsum.photos/600/776/?random" alt="" />
    </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardActions>
    <FlatButton label="Action1" />
    </CardActions>
        </Card>
          </div>
        </div>

        </div>
      );
    };
};

export default Letterhead;
