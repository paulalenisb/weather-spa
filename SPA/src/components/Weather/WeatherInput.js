import React from 'react';


export default function WheaterInput({ query, setQuery, search }) {
    

    return (

        <div className="card card-body">
        <form onSubmit={e => {e.preventDefault()}}>
            <div className="form-group">
                <input 
                    type="text"  
                    placeholder="Location" 
                    className="form-control" 
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}/>
            </div>
            {/* <button className="btn btn-success btn-block">
                Get Weather
            </button> */}
        </form>
    </div>
    );
}
