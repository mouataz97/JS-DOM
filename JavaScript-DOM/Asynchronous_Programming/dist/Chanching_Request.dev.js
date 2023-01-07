"use strict";

// Get DOM elements
var generateButton = document.getElementById('generate-button');
var postTitle = document.getElementById('post-title');
var postId = document.getElementById('post-id');
var postContent = document.getElementById('post-content'); // API URL

var api = 'https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets';

function makeRequest(verb, url, data) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open(verb, url);

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200 || request.status === 201) {
          resolve(JSON.parse(request.response));
        } else {
          reject(JSON.parse(request.response));
        }
      }
    };

    if (verb === 'POST') {
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
    } else {
      request.send();
    }
  });
}