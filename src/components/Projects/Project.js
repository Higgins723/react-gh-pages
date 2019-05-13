import React from 'react';

const Project = (props) => {
    const data = props.data;

    return (
        <div className="pb project row">
            <div className="offset-md-3 col-md-2 sm-padding-btm">
                <img alt="work logo" className="work-image" src={data.image} />
            </div>
            <div className="col-md-4">
                <h3>{data.company}</h3>
                <div className="text-success">{data.title}</div>
                <div className="font-weight-bold">{data.technology.length > 0 && 'Technology: '}{data.technology}</div>
                <p>{data.about}</p>
            </div>
        </div>
    );
}

export default Project;