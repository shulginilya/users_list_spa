import { useNavigate } from "react-router-dom";

export const Sidebar = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div data-testid="sidebar_root">
            <ul>
                <li>
                    <button onClick={() => navigate('/')}>Home</button>
                </li>
                <li>
                    <button onClick={() => navigate('/users')}>Users List</button>
                </li>
            </ul>
        </div>
    )
};
