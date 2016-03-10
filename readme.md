# Cron Manager

Cron Manager is a manager which you can define cron jobs easily without think about the cron regex. This package is **under development**.

> I am not sure it is a requirement for your project. But I like this and maybe you like too. :)

### Installation

```
$ npm install cron-manager
```

### Usage

```
var CronManager = require('cron-manager');

var MyTask = {
    
    type: "daytime", // Optional

    exec: function () {
        console.log("executed");
    }

};

var tasks = {
    second: [MyTask],
    minute: [],
    hourly: []
};

new CronManager(tasks);
```

### Extras

- `daytime`: It means that the Cron Manager runs it beetween 9 AM and 11 PM.
- `midnight`: It means that the Cron Manager runs it beetween 0 AM and 8 AM.

### License

[MIT](https://opensource.org/licenses/MIT)
