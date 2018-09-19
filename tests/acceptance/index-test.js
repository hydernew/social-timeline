import {
  module,
  test
} from 'qunit';
import {
  find,
  visit,
  currentURL
} from '@ember/test-helpers';
import {
  setupApplicationTest
} from 'ember-qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /index', async function (assert) {
    let controller = this.owner.lookup('controller:index');
    let data = [{
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
    ];
    let pin = [{
      "id": 62232169,
      "title": "",
      "description": "Chart of 14 Perennial Herbs: (Bay Leaves, Chives, Lavender, Lemon Balm, Lemon Verbena, Marjoram, Oregano, Peppermint, Rosemary, Sage, Spearmint, Tarragon, Thyme, Winter Savory)",
      "links": "http://smalltownhomestead.com/perennial-herbs-chart/",
      "likes": 0,
      "comments": 0,
      "saves": 0,
      "repins": 0,
      "timestamp": 1532282218,
      "post_id": "222928250290496277"
    }];
    let instagram_media = [{
      "id": 153577649,
      "text": "In my blond days!! #blondeshavemorefun",
      "link": "",
      "type": "picture",
      "location_name": "",
      "likes": 36,
      "comments": 1,
      "timestamp": 1535227796,
      "post_id": "Bm6i4KkAOG6",
      "views": 0
    }];
    let youtube_video = [{
      "id": 23001965,
      "name": "QUAL A MÚSICA COM EMOJI ? A BATALHA FINAL !!!",
      "description": "Youtube: https://www.youtube.com/c/VitorTadeuInstagram: https://www.instagram.com/vitortadeu0001Twitch: https://www.twitch.tv/vitortadeuTwitter: https://twitter.com/VitorTadeu01Facebook: https://www.facebook.com/vitortadeu0001/",
      "link": "/watch?v=CXFOR3sxYdY",
      "views": 235,
      "comments": 0,
      "likes": 42,
      "dislikes": 1,
      "timestamp": 1535155200,
      "post_id": "CXFOR3sxYdY"
    }];
    let tweet = [{
      "id": 379103048,
      "content": "Yanis [X-Tac] Cubic Badminton Overgrips, the grip that stick to your hand.\n\nAvailable at our website linked in the description.\n#badminton #BadmintonPlayerpic.twitter.com/p1DTfPioqa",
      "retweets": 1,
      "favorites": 2,
      "timestamp": 1536311700,
      "post_id": "1037992622034280448"
    }];
    let facebook_status = [{
      "id": 140775248,
      "text": "Sunday stroll with my little fambam 👪💗🐶🌳 @ London, United Kingdom",
      "likes": 31,
      "comments": 0,
      "shares": 0,
      "timestamp": 1536510645,
      "post_id": "162572987150669_2183409688400312"
    }];
    let article = [{
      "id": 104645142,
      "title": "Book Review: Until You’re Mine by Cindi Madsen",
      "description": "",
      "timestamp": 1537106335,
      "url": "http://angelreads.com/2018/09/review-until-youre-mine-cindi-madsen/",
      "content": "",
      "facebook_shares": 0
    }];
    controller.setProperties({
      data,
      pin,
      instagram_media,
      youtube_video,
      tweet,
      facebook_status,
      article
    });
    await visit('/');
    assert.equal(currentURL(), '/');

    assert.equal(find('[data-test-title="pin-total"]').textContent.trim(), 1, 'Pins length is displayed correctly');
    assert.equal(find('[data-test-title="pin-text"]').textContent.trim(), pin[0].description, 'Pin description is displayed correctly');

    assert.equal(find('[data-test-title="insta-total"]').textContent.trim(), 1, 'Instagram Media length is displayed correctly');
    assert.equal(find('[data-test-title="insta-text"]').textContent.trim(), instagram_media[0].text, 'Instagram Media text is displayed correctly');

    assert.equal(find('[data-test-title="youtube-total"]').textContent.trim(), 1, 'Youtube Video length is displayed correctly');
    assert.equal(find('[data-test-title="youtube-text"]').textContent.trim(), youtube_video[0].description, 'Youtube Video description is displayed correctly');

    assert.equal(find('[data-test-title="tweet-total"]').textContent.trim(), 1, 'Tweets length is displayed correctly');
    assert.equal(find('[data-test-title="tweet-text"]').textContent.trim(), tweet[0].content, 'Tweet content is displayed correctly');

    assert.equal(find('[data-test-title="facebook-total"]').textContent.trim(), 1, 'Facebooks status length is displayed correctly');
    assert.equal(find('[data-test-title="facebook-text"]').textContent.trim(), facebook_status[0].text, 'Facebooks status text is displayed correctly');

    assert.equal(find('[data-test-title="article-total"]').textContent.trim(), 1, 'Articles length is displayed correctly');
    assert.equal(find('[data-test-title="article-text"]').textContent.trim(), article[0].description, 'Article description is displayed correctly');
  });
});
