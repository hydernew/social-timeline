import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | posts-timeline', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
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
    ];
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data', data);
    await render(hbs`{{posts-timeline data=data max=4}}`);

    assert.equal(this.element.querySelectorAll('circle')[5].getAttribute('r'), '0', 'Radius is 0 when value is 0');

    assert.equal(this.element.querySelector('circle').getAttribute('cx'), '9.533898305084733', 'X is calculated correctly for first element');

    assert.equal(this.element.querySelector('g.y-axis').textContent.trim(), 'SundayMondayTuesdayWednesdayThursdayFridaySaturday', 'Y Axis is rendered correctly')
    assert.equal(this.element.querySelector('g.x-axis').textContent.trim(), '01234567891011121314151617181920212223', 'X Axis is rendered correctly')

    assert.equal(this.element.querySelector('g.tool-tip').textContent.trim(),'1', 'Tooltip is rendered correctly')
  });
});
