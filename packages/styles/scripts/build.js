const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

//* build 폴더 생성
try {
	console.log("💾 build 폴더 생성...");
	fs.mkdirSync(path.join(__dirname, "..", "build"));
} catch {
	console.log("build 폴더가 존재합니다...");
}

const getComponents = () => {
	let allComponents = [];
	const types = ["atoms", "molecules"];

	types.forEach((type) => {
		const allFiles = fs.readdirSync(`src/${type}`).map((f) => ({
			input: `src/${type}/${f}`,
			output: `build/${f.slice(0, -4) + "css"}`, //* scss -> css
		}));

		allComponents = [...allComponents, ...allFiles];
	});

	return allComponents;
};

//* scss compile func
const compile = (filePath, fileName) => {
	const result = sass.renderSync({
		data: fs.readFileSync(path.resolve(filePath)).toString(),
		outputStyle: "expanded",
		includePaths: [path.resolve("src")],
	});

	fs.writeFileSync(path.resolve(fileName), result.css.toString());
};

//* compile...
compile("src/global.scss", "build/global.css");
getComponents().forEach((component) =>
	compile(component.input, component.output)
);
