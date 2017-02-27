import {getMyWork} from './v1-api';
import {transformToPomodoneJson} from './pomodone';
import {PORT} from './env';

import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.route('/pomodone').get((req,res)=>{
	getMyWork().then(output =>{
		res.status(200).send(transformToPomodoneJson(output.data));
	});
});

app.listen(PORT, function (err) {
	if (err) {
		return console.error('Error starting server: ', err)
	}
	console.info('Server successfully started on port %s', PORT)
});