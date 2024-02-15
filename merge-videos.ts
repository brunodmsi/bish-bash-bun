import { $, file } from 'bun'

const concat_video_file = file('concat.txt')

await $`touch ${concat_video_file}`

for await (let video of $`ls *.mp4`.lines()) {
	await $`echo file ${$.escape(`\'${video}\'`)} >> ${concat_video_file}`
}

await $`ffmpeg -f concat -safe 0 -i ${concat_video_file} -c copy merged.mp4`

await $`rm ${concat_video_file}`
