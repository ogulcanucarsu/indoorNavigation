var barcodeSonuc;
angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var liste=[
      {s_id:1, s_name:'Bilgisayar Mühendisligi 303'},
      {s_id:2, s_name:'Elektronik Mühendisligi 301'},
      {s_id:3, s_name:'Bilgisayar Mühendisligi 305'},
      {s_id:4, s_name:'Bilgisayar Mühendisligi Billab'},
      {s_id:5, s_name:'Kimya Mühendisligi 508'},
      {s_id:6, s_name:'Kimya Mühendisligi 509'},
      {s_id:7, s_name:'Kimya Mühendisligi 510'},
      {s_id:8, s_name:'Endüstri Mühendisligi Lab 350'},
      {s_id:9, s_name:'Kimya Mühendisligi Billab 150'}
  ];

  return {
    all: function() {
      return liste;
    },
    get: function(chatId) {
      for (var i = 0; i < liste.length; i++) {
        if (liste[i].s_id === parseInt(chatId)) {
          return liste[i];
        }
      }
      return null;
    }
  };
});
