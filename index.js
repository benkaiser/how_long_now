var moment = require('moment');

module.exports = class HowLong {
  constructor(until = '17') {
    this.until = moment(until, this.formats());
  }

  diff() {
    return moment.duration(this.next().diff(this.now()));
  }

  formats() {
    return ['HH', 'HH:mm', 'HH:mm:ss'];
  }

  next() {
    return (this.until > this.now()) ? this.until : this.until.add(1, 'day');
  }

  now() {
    return moment();
  }

  prettyPrint(duration) {
    return ['hours', 'minutes', 'seconds']
             .map((key) => duration.get(key))
             .join(':');
  }

  print() {
    console.log(this.prettyPrint(this.diff()));
  }
};
