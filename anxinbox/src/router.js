import React from 'react';
import { Router, Route } from 'dva/router';
/*import IndexPage from './routes/IndexPage';*/

/*import Layout from "./routes/Layout.js";
*/
/*function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} />
    </Router>
  );
}*/

/*export default RouterConfig;
*/

const cached={};

function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({history,app}){
	const routes=[
		{
			path:'/',
			name:'IndexPage',
			getComponent(nextState,cb){
				require.ensure([],(require)=>{
					cb(null,require('./routes/IndexPage'));
				});
			},

		},
		{
			path:'/users',
			name:'Layout',
			getComponent(nextState,cb){
				require.ensure([],(require)=>{
					registerModel(app,require('./models/users'));
					cb(null,require('./routes/Layout'));
				});
			},
		}
	];

 return <Router history={history} routes={routes} />;

}

export default RouterConfig;


