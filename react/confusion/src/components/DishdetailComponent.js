import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

// Functional components always begin with capital letter 
    function RenderDish({dish}){
        if (dish != null){
            return(
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle><h3>{dish.name}</h3></CardTitle>
                            <CardText>{dish.description}</CardText>  
                        </CardBody>
                    </Card>
                </div>               
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
    function RenderComments({dish}){
        if (dish != null){
            var comments = dish.comments.map((comment)=>{
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
        else {
            return(
                <div></div>
            )
        }
    }
const Dishdetail = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <RenderDish dish={props.dish}/>
                <RenderComments dish={props.dish}/> 
            </div>
        </div>  
    );
}

export default Dishdetail;