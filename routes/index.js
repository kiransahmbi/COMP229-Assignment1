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
  res.render('index', {title: "Home"});
}

function aboutme(req, res, next) {
  res.render('aboutme', {title: "About Me"});
}

function projects(req, res, next) {
  res.render('projects', {title: "Projects"});
}

function services(req, res, next) {
  res.render('services', {title: "Services"});
}

function contactme(req, res, next) {
  res.render('contactme', {title: "Contact Me"});
}

module.exports = router;
