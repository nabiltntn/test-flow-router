//Define a router with action that gives params and query params (?querymap=)
//Order of call when a flow router is entered : triggers , subscriptions, and final action
FlowRouter.route('/blog/:postId', {
    name : 'blog.post.id',
    action: function(params, queryParams) {
        BlazeLayout.render('layout', {top : 'header' , mainContent: 'blog_post_page' })
    },
});

//Define a group of nested routes
let delivery_request_routes = FlowRouter.group({
    prefix: '/delivery_request',
    name : 'delivery_request',
    triggersEnter : [function(context, redirect) {
      console.log('runnong delivery requests group enter trigger')
      console.log(FlowRouter.current().route)
    }]
})


delivery_request_routes.route('/', {
    name : 'delivery_request.index',
    action: function(params, queryParams) {
        console.log('we are displaying the delivery request root route');
        BlazeLayout.render('layout', {top : 'header' , mainContent: 'welcome' })
    },
    triggersEnter : [function(context, redirect) {
      console.log('runnong delivery requests route enter trigger')
    }]
});

delivery_request_routes.route('/:_id', {
    name : 'delivery_request.index',
    action: function(params, queryParams) {

        console.log('we are displaying the delivery request page using _id' + params._id);
        BlazeLayout.render('layout', {top : 'header' , mainContent: 'delivery_page' })

    },
    triggersEnter : [function(context, redirect) {
      console.log('runnong delivery requests route enter trigger')
      if(context.params._id > 3) {
          redirect(`/blog/${context.params._id}`)
      }
    }],
    triggersExit : [triggersExiter]
});


function triggersExiter(context) {
  console.log(`leaving the current route ${FlowRouter.current().route.name}`)
}
