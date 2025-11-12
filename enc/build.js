import { exec } from 'child_process';
import * as process from 'process';

function build() {
  exec('node batch-encdec', (e, stdout, stderr) => {
    if (stderr) {
      console.log(stderr);
      return;
    }
    console.log(stdout, e)
  })
}

build();
