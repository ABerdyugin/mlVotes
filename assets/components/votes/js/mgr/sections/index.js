Ext.onReady(function() {
    MODx.load({ xtype: 'votes-page-home'});
});
 
Votes.page.Home = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        components: [{
            xtype: 'votes-panel-home'
            ,renderTo: 'votes-panel-home-div'
        }]
    });
    Votes.page.Home.superclass.constructor.call(this,config);
};
Ext.extend(Votes.page.Home,MODx.Component);
Ext.reg('votes-page-home',Votes.page.Home);
