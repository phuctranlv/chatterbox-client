var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);
    // var Messages = {};
    // FormView.initialize();
    // RoomsView.initialize();
    // MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.whenReady);


  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      for (var i = 0; i < data.results.length; i++) {
        Messages[data.results[i].objectId] = data.results[i];
      }
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
  whenReady: function () {
    App.stopSpinner();
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
  }
};