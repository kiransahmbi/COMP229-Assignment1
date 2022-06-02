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
  res.render('index', { title: 'Express' });
}

function aboutme(req, res, next) {
  res.render('aboutme', { title: 'Express' });
}

function projects(req, res, next) {
  res.render('projects', { title: 'Express' });
}

function services(req, res, next) {
  res.render('services', { title: 'Express' });
}

function contactme(req, res, next) {
  res.render('contactme', { title: 'Express' });
}

module.exports = router;
