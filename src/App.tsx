import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	Home,
	UsersList,
	UserDetails,
	NotFound,
} from '@/pages';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/users" element={<UsersList />} />
				<Route path="/users/:id" element={<UserDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
