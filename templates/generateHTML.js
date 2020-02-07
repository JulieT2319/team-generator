function pageTop(projectName) {
	return `<!DOCTYPE html>
	<html lang="en">
	
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
			<title>${projectName} Team</title>
		</head>
	
		<body>
			<nav class="teal darken-4">
				<div class="container valign-wrapper">
					<h1 class="brand-logo center">${projectName} Team</h1>
				</div>
			</nav>
			<div class="container center">
				<div class="row">`
}

function managerHTML(manager) {
	return `<div class="col">
<div class="card teal darken-1">
	<div class="card-content white-text">
		<span class="card-title">${manager.name}</span>
		<p>Role: Manager</p>
		<p>ID: ${manager.id}</p>
		<p>Email: ${manager.email}</p>
		<p>Office Number: ${manager.office}</p>
	</div>
</div>
</div>`
}
function engineerHTML(engineer) {
	return `<div class="col">
<div class="card teal">
	<div class="card-content white-text">
		<span class="card-title">${engineer.name}</span>
		<p>Role: Engineer</p>
		<p>ID: ${engineer.id}</p>
		<p>Email: ${engineer.email}</p>
		<p>GitHub: ${engineer.github}</p>
	</div>
</div>
</div>`
}
function internHTML(intern) {
	return `<div class="col">
<div class="card teal lighten-1">
	<div class="card-content white-text">
		<span class="card-title">${intern.name}</span>
		<p>Role: Intern</p>
		<p>ID: ${intern.id}</p>
		<p>Email: ${intern.email}</p>
		<p>School: ${intern.school}</p>
	</div>
</div>
</div>`
}
function pageEnd() {
	return `</div>
</div>
</body>

</html>`
}
module.exports = {
	pageTopHTML: pageTop,
	managerHTML: managerHTML,
	engineerHTML: engineerHTML,
	internHTML: internHTML,
	pageEndHTML: pageEnd
}