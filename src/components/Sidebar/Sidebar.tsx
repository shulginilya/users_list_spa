import { Link } from "react-router-dom";

export const Sidebar = (): JSX.Element => (
    <div data-testid="sidebar_root">
        <ul>
            <li>
                <Link
                    to='/'
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to='/users'
                >
                    Users List
                </Link>
            </li>
        </ul>
    </div>
);
