import { Route, Routes } from 'react-router-dom';
import {
	Home,
	UsersList,
	UserDetails,
	NotFound,
} from '@/pages';

export const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)
