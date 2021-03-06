const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

//* build ํด๋ ์์ฑ
try {
	console.log('๐พ build ํด๋ ์์ฑํฉ๋๋ค...');
	fs.mkdirSync(path.join(__dirname, '..', 'build'));
} catch {
	console.log('build ํด๋๊ฐ ์กด์ฌํฉ๋๋ค...');
}

//* scss compile func
const compile = (filePath, fileName) => {
	const result = sass.renderSync({
		data: fs.readFileSync(path.resolve(filePath)).toString(),
		sourceComments: false,
		outputStyle: 'expanded',
		includePaths: [path.resolve('src')]
	});

	fs.writeFileSync(path.resolve(fileName), result.css.toString());
};

//* scss build
compile('src/global.scss', 'build/global.css');
