import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super();
    let data = [
      {
        "label": "Sunday",
        "values": [
          1,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          1,
          2
        ]
      },
      {
        "label": "Monday",
        "values": [
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          2,
          1,
          0,
          0,
          3,
          1,
          3,
          1,
          0,
          2,
          0,
          1
        ]
      },
      {
        "label": "Tuesday",
        "values": [
          0,
          3,
          1,
          1,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          1,
          1,
          3,
          0
        ]
      },
      {
        "label": "Wednesday",
        "values": [
          4,
          1,
          0,
          1,
          0,
          1,
          2,
          2,
          0,
          1,
          1,
          0,
          1,
          0,
          1,
          0,
          1,
          2,
          0,
          1,
          0,
          2,
          0,
          0
        ]
      },
      {
        "label": "Thursday",
        "values": [
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          1,
          2,
          2,
          1,
          0,
          0,
          2,
          0,
          0,
          1,
          2,
          2,
          1,
          0,
          2,
          0,
          1
        ]
      },
      {
        "label": "Friday",
        "values": [
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          2,
          1,
          0,
          1,
          2,
          1,
          3,
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          2
        ]
      },
      {
        "label": "Saturday",
        "values": [
          1,
          0,
          1,
          0,
          0,
          1,
          0,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          0,
          1,
          0,
          0,
          2,
          0,
          1,
          1,
          0
        ]
      }
    ]
    this.set('data', data)
  }
});