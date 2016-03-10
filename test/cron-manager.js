var chai = require('chai'),
    expect = chai.expect,
    CronManager = require('../src/CronManager.js');

describe('Cron Manager', function () {
    
    it('should call the task', function (done) {
        
        var secondCounter = 0;
        var minuteCounter = 0;
        
        var MySecondTask = {
            
            exec: function () {
                secondCounter++;
                if (secondCounter > 60) {
                    var end = (new Date()).getTime();
                    
                    expect(minuteCounter).to.eql(1);
                    expect(end - start).to.greaterThan(61000);
                    expect(end - start).to.lessThan(62000);
                    
                    done();
                }
            }

        };

        var MyMinuteTask = {
                        
            exec: function () {
                minuteCounter++;
            }

        };
        
        var start = (new Date()).getTime();
        
        new CronManager({
            minute: [MyMinuteTask],
            second: [MySecondTask],
            hourly: []
        });
        
    });

});