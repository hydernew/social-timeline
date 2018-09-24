import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:index');
    assert.ok(controller);
  });
  test('chart data is processed correctly', function(assert) {
    let controller = this.owner.lookup('controller:index');
    let data = controller.data;
    let json = {
      timestamp: 1537130905
    };
    let sundayValues = data[0].values;
    let mondayValues = data[1].values;
    controller.processChartData(json);
    let newSundayValues = data[0].values;
    assert.notEqual(sundayValues, newSundayValues, 'New array instance is set for the given day');
    assert.equal(mondayValues, data[1].values, 'Old array instance is maintained for an other day');
    assert.equal(data, data, 'Same data object is maintained after processing');
    assert.equal(newSundayValues[20], 1, 'Value is incremented for the hour in the timestamp');
  });
});
