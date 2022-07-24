const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

//* build 폴더 생성
try {
	console.log('💾 build 폴더 생성합니다...');
	fs.mkdirSync(path.join(__dirname, '..', 'build'));
} catch {
	console.log('build 폴더가 존재합니다...');
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
