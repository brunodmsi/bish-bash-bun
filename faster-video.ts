import { $ } from 'bun'

const args = process.argv.slice(2)

if (args.length === 0) {
	$`echo 'Should have atleast one argument'`
}

const filename = args[0]

let speed_factor = 2;
if (!!args[1]) {
	speed_factor = +args[1];
}

await $`ffmpeg -i ${filename} -filter:v "setpts=PTS/${speed_factor}" -an faster_${filename}`
