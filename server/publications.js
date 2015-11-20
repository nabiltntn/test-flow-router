

Meteor.publish('messages/all', function() {
  return Messages.find();
})


Meteor.publish('messages/single', function(messageId) {
  //check(messageId, String)
  return Messages.find({_id : messageId})
})
