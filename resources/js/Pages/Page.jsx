import React from 'react';
import {Link} from "react-router-dom";

function Page() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Page Component</div>
                        <div className="card-body">I'm an page component!</div>
                        <Link to={'/'} className="btn btn-primary">Homeへ遷移</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
