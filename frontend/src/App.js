import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';
import SplashPage from './components/SplashPage';
function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{/* <button onClick={() => setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )} */}
			{isLoaded && (
				<Switch>
					<Route exact path="/">
						<SplashPage />
					</Route>
					<Route path="/signup">
						<SignupFormPage />
					</Route>
				</Switch>
			)}
		</>
	);
}

export default App;