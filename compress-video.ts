import { $ } from 'bun'

const args = process.argv.slice(2)

if (args.length === 0) {
	$`echo 'Should have atleast one argument'`
}

const filename = args[0]

await $`ffmpeg -i ${filename} -vcodec libx265 -crf 28 compressed_${filename}`
