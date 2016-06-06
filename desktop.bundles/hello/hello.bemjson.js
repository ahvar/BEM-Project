({
	block: 'page',
	title: 'hello',
	head: [
		{ elem: 'css', url: 'hello.min.css'}
	],
	scripts: [{ elem: 'js', url: 'hello.min.js'}],
	mods: { theme: 'islands'},
	content: [
		{
			block: 'hello',
			content: [
				{
					elem: 'greeting',
					content: 'Hello, %users%!'
				},
				{
					block: 'input',
					mods: { theme: 'islands', size: 'n'},
					name: 'name',
					placeholder: 'User name'
				},
				{
					block: 'button',
					mods: { theme: 'islands', size: 'm', type: 'submit'},
					text: 'Click'
				}
			]
		}
	]
})