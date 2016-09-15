// jshint node: true, esversion: 6
'use strict';

let ffmpeg = require('fluent-ffmpeg');

ffmpeg('input.mp4')
  .output('output.mp4')
  .on('start', (data) => {
    console.log(`Input: ${JSON.stringify(data, 2, '', null)}`);
  })
  .on('end', (stdout) => { console.log('Finished processing.'); })
  .seek('0:03.000')
  .duration('0:05.000')
  .run();
