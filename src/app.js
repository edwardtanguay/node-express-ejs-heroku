import express from 'express';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));

const app = express();
const port = process.env.PORT || 3011;
// test

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

const staticDirectory = path.join(__dirname, 'public');
app.use(express.static(staticDirectory));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Home',
		currentPageIdCode: 'home',
		message: 'This is the home page.'
	});
});

app.get('/info', (req, res) => {
	res.render('info', {
		title: 'Info',
		currentPageIdCode: 'info',
		message: 'This is the info page.'
	});
});

app.listen(port, () => {
	console.log('listening on port: http://localhost:' + port);
});