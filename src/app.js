import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve(path.dirname(''));
dotenv.config();
const app = express();
const port = process.env.PORT || 3011;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

const staticDirectory = path.join(__dirname, 'public');
app.use(express.static(staticDirectory));

const siteData = {
	applocation: process.env.APP_LOCATION
};

console.log(siteData);

app.get('/', (req, res) => {
	res.render('index', {
		...siteData,
		title: 'Home',
		currentPageIdCode: 'home',
		message: 'This is the main home page.'
	});
});

app.get('/info', (req, res) => {
	res.render('info', {
		...siteData,
		title: 'Info',
		currentPageIdCode: 'info',
		message: 'This is the info page.'
	});
});

app.listen(port, () => {
	console.log('listening on port: http://localhost:' + port);
});