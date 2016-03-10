'use strict';

var CronJob = require('cron').CronJob;

module.exports = function (tasks) {
    
    // Checking the time is a daytime
    var isADaytime = function () {
        var hour = (new Date()).getHours();
        if (hour >= 9 && hour <= 11) {
            return true;
        }
        return false;
    };
    
    // Checking the task type acceptable
    var checkTheType = function (type) {
        if (type === "daytime") {
            return isADaytime();
        } else if (type === "midnight") {
            return !isADaytime();
        }
        return true;
    };
    
    // Executing the tasks which is selected by the type
    var execTaskByType = function (type) {
        for (var key in tasks[type]) {
            var task = tasks[type][key];
            if (checkTheType(task.type)) {
                task.exec();
            }
        }
    };
    var execSecondTasks = function () {
        execTaskByType("second");
    };
    var execMinuteTasks = function () {
        execTaskByType("minute");
    };
    var execHourlyTasks = function () {
        execTaskByType("hourly");
    };
    
    new CronJob('* * * * * *', execSecondTasks, null, true);     
    new CronJob('* * * * *', execMinuteTasks, null, true);       
    new CronJob('0 * * * *', execMinuteTasks, null, true);       

};