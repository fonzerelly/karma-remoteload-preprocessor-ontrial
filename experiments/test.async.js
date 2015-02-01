var async = require ("async");
var keys = require ("object-keys");

var waiters = {
  "otto": 3000,
  "karl": 5000,
  "willi": 1000
};

async.forEach(keys(waiters), function(waiter, callback) {
  setTimeout(function () {
    console.log(waiter);
    callback();
  }, waiters[waiter]);
}, function (err) {
  if (err) throw err;
  console.log("You have been served");
});

