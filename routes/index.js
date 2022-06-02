var express = require('express');
var router = express.Router();

// Routes
router.get('/', home);
router.get('/about-me', aboutme);
router.get('/projects', projects);
router.get('/services', services);
router.get('/contact-me', contactme);

// Controllers
function home(req, res, next) {
  res.render('index', {});
}

function aboutme(req, res, next) {
  res.render('aboutme', {});
}

function projects(req, res, next) {
  res.render('projects', {});
}

function services(req, res, next) {
  res.render('services', {});
}

function contactme(req, res, next) {
  res.render('contactme', {});
}

module.exports = router;
