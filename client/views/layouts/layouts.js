Template.delivery_page.onCreated(function() {

  this.autorun(() => {
    var messageId = FlowRouter.getParam('_id');
    this.subscribe('messages/single', messageId);
  });

});


Template.header.onCreated(function() {
  this.autorun(() => {
    this.subscribe('messages/all');
  });
});


Template.header.helpers({
  messages: function() {
    return Messages.find()
  }
});


Template.delivery_page.helpers({
  message: function() {
    var messageId = FlowRouter.getParam('_id')
    var message = Messages.findOne({_id: messageId}) || {}
    return message
  }
});
