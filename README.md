# social-timeline

A demo of this app can be found [here](http://social-timeline.s3-website-us-east-1.amazonaws.com/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd social-timeline`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying
Create a file named `.env` with the below content

```bash
ACCESS_KEY_ID='<your-aws-access-key>'
SECRET_ACCESS_KEY='<your-aws-secret>'
BUCKET='<your-s3-bucket>'
REGION='<the-region-your-bucket-is-in>'
```

### Description of Solution

This application draws a 3-dimensional visualization of the social posts received from [upfluence stream](https://stream.upfluence.co/stream) and one instance of each post type along with a counter of the number of posts processed.

* The app is written using [Ember JS](https://emberjs.com/)

* 3d Visualization is shown as a punch card system generated using [d3js](https://d3js.org/) and inspired from [bl.ocks](http://bl.ocks.org/kaezarrex/10122633).

* The instance of posts are shown as [bootstrap cards](https://getbootstrap.com/docs/4.0/components/card/). The appearence of posts are slightly inspired from [upfluence stream webapp](https://stream.upfluence.co/)

* Data is received as streams from [upstream's publicly available HTTP API ](https://stream.upfluence.co/stream) which streams post using [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) technology.

* The app is deployed into Amazon S3 and static contents are served via Amazon CloudFront CDN.

###Reasoning behind technical choices

* Emberjs provides a complete package to create an ambitious web application, hence it is used as the framework to build the app.

* When it comes to data visualization, d3 is the clear forerunner as it renders and rerenders fast. Also the community support in d3 is a commendable one. For all chart types we can find an example in [bl.ocks](https://bl.ocks.org/)

* Bootstrap is used as the css framework. Not all the files of bootstrap are included. Only the required files are included as sass files. [Sass](https://sass-lang.com/) is used as the css preprocessor as the latest version of bootstrap supports this.

* Stream handling such as connection open, listening for messages are done in an Ember Service. Since a service can do a process in isolation and can be plugged anywhere in the app, service is used.

* [ember-test-selectors](https://github.com/simplabs/ember-test-selectors) is used to query dom in test environment that is stripped off in production environment

* `ember-cli-deploy plugin` is used to deploy the app. As the app is deployed in Amazon S3 `ember-cli-deploy-s3` plugin is used along with `ember-cli-deploy` plugin. `ember-cli-deploy-gzip` is used to gzip the contents before they are deployed to S3.

###Trade-offs

* Since the punch card chart is used for a specific data, axis information is harcoded. If needed this can be obtained by processing the data passed to the chart.

* The maximum value for the posts count an a given day at a given time is also passed to the chart from the controller as the maximum calculation will be simpler in the controller than the chart. If needed all the values in the data can be accumulated in a single array and it's maximum value can be obtained.

* The connection to the stream is not closed and is kept open as long as the app is kept opened. This can increase the memory consumed. If needed the connection can be closed and reopened and flushing the data in the mean time.
