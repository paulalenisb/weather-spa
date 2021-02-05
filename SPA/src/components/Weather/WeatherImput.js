import React from 'react';

export default function WheaterImput() {
    return (
        <div className="card card-body">
            <form action="">
                <div className="form-group">
                    <input type="text" name="city" placeholder="Location" className="form-control" autofocus/>
                </div>
                <button className="btn btn-success btn-block">
                    Get Weather
                </button>
            </form>
        </div>
    );
}
