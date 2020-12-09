const axios = require('axios');
const chalk = require('chalk');
import { TestRailOptions, TestRailResult } from './testrail.interface';

export class TestRail {
  private base: String;
  private runId: Number;

  constructor(private options: TestRailOptions) {
    this.base = `${options.host}/index.php?/api/v2`;
    this.runId = options.runId
  }

  public publishResults(results: TestRailResult[]) {
    return axios({
      method: 'post',
      url: `${this.base}/add_results_for_cases/${this.runId}`,
      headers: { 'Content-Type': 'application/json' },
      auth: {
        username: this.options.username,
        password: this.options.password,
      },
      data: JSON.stringify({ results }),
    })
      .then(response => {
        console.log('\n', chalk.magenta.underline.bold('(TestRail Reporter)'));
        console.log(
          '\n',
          ` - Results are published to ${chalk.magenta(
            `${this.options.host}/index.php?/runs/view/${this.runId}`
          )}`,
          '\n'
        );
      })
      .catch(error => console.error(error));
  }
}
