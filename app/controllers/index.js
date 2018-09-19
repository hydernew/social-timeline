import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { oneWay } from '@ember/object/computed';
export default Controller.extend({
  streamer: service(),
  max: 0,
  pinMedia: oneWay('pin.lastObject'),
  instaMedia: oneWay('instagram_media.lastObject'),
  youtubeVideo: oneWay('youtube_video.lastObject'),
  tweetMedia: oneWay('tweet.lastObject'),
  facebookStatus: oneWay('facebook_status.lastObject'),
  articleMedia: oneWay('article.lastObject'),
  init() {
    this._super();
    this.setProperties({
      pin: [],
      instagram_media: [],
      youtube_video: [],
      tweet: [],
      facebook_status: [],
      article: [],
      data: [
        {
          "label": "Sunday",
          "values": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          "label": "Monday",
          "values": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          "label": "Tuesday",
          "values": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          "label": "Wednesday",
          "values": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          "label": "Thursday",
          "values": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          "label": "Friday",
          "values": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          "label": "Saturday",
          "values": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
      ]
    });
    this.get("streamer").subscribe( message => {
      let [key] = Object.keys(message);
      let json = message[key];
      this.get(key).pushObject(json);
      this.processChartData(json);
    });
  },
  processChartData(json) {
    let max = this.max;
    let data = this.data;
    let { timestamp } = json;
    let date = new Date(timestamp*1000);
    let day = date.getDay();
    let hours = date.getHours();
    let dayObject = data[day];
    //Create new array as ember observer's @each can work one level deep only
    let dayValues = Array.prototype.concat([],dayObject.values);
    let value = ++dayValues[hours];
    if(value > max) {
      this.set('max', value);
    }
    set(dayObject,'values', dayValues);
  }
});
