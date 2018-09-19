import Service from '@ember/service';
import config from '../config/environment';
export default Service.extend({
  streamSourceUrl: config.streamSourceUrl,
  messageHandler: null,
  source: null,
  init() {
    this._super();
    if(this.streamSourceUrl) {
      this.connect();
    }
  },
  subscribe(handler) {
    this.set('messageHandler', handler);
  },
  close() {
    if (this.source && this.source.readyState !== 2) {
      this.source.close();
    }
  },
  willDestroy() {
    this.close();
  },
  connect() {
    let self = this;
    this.source = new window.EventSource(this.streamSourceUrl);
    this.source.onmessage = function (message) {
      let json = JSON.parse(message.data);
      if (typeof self['messageHandler'] === 'function') {
        self['messageHandler'](json);
      }
    };
  }
});
