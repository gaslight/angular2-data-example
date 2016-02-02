/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

var express = require('express');
var cors = require("cors");
var _ = require("underscore");

var heroes = [
	{"id": 11, "name": "Mr. Nice"},
	{"id": 12, "name": "Narco"},
	{"id": 13, "name": "Bombasto"},
	{"id": 14, "name": "Celeritas"},
	{"id": 15, "name": "Magneta"},
	{"id": 16, "name": "RubberMan"},
	{"id": 17, "name": "Dynama"},
	{"id": 18, "name": "Dr IQ"},
	{"id": 19, "name": "Magma"},
	{"id": 20, "name": "Tornado"}
];

function findHero(id) {
  return _.findWhere(heroes, {id: Number(id)});
}

function createHero(candidate) {
  candidate.id = heroes.length + 1;
  heroes.push(candidate);
  return candidate;
}

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.post('/login', function(req, res) {
  res.json({ message: 'logging in!' });
});

app.post('/logout', function(req, res) {
  res.json({ message: 'logging out!'});
});

app.get('/heroes', function (req, res) {
  res.json({data: heroes});
});

app.get('/heroes/:id', function (req, res) {
  res.json(findHero(req.params.id));
});

app.post("/heroes", function(req, res) {
  console.log(req.body);
  res.json(createHero(req.body));
});

app.put("/heroes/:id", function(req, res) {
  candidate = findHero(req.params.id);
  _.extend(candidate, req.body);
  res.json(candidate);
});

app.listen(8000, function () {
  console.log('Server running on port 8000');
});
