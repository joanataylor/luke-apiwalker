import { Outlet } from "react-router-dom";

function Planet() {
    return (
        <div className="card">
            <div className="card-body">
                <h1>Planets</h1>
                <Outlet />
            </div>
        </div>
    );
}

export default Planet;
