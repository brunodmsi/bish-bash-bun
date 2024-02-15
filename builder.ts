import { $ } from 'bun'

const scripts = [
	'merge-videos',
	'faster-video'
];

for (let script of scripts) {
	await $`TO_BUILD=${script} bun build-exec`
	await $`chmod +x ${script}`
	await $`mv ${script} $HOME/.bun-bin`
}
