import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
    }

    render (){
        var comments = this.props.dishSelected.comments.map((comment)=>{
            var date = new Date(comment.date)
            return(
                <p>
                    -- {comment.author}, {date.toDateString()} <br/>
                    {comment.comment}
                </p>
            )
        })
        return (
            <div  className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardBody>
                            <CardTitle><h1>Comments</h1></CardTitle>
                            <CardText>
                                {comments}
                            </CardText>
                        </CardBody>
                    </Card>
            </div>
        );
    } 
}

export default Dishdetail;