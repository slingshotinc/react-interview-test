import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppContext, context } from "./store/index";

const { Provider } = AppContext

ReactDOM.render(
	<>
		<Provider value={context}>
			<App />
		</Provider>
	</>, document.getElementById('root'));