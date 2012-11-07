Votes.panel.Home = function(config) {
    config = config || {};
    Ext.apply(config,{
        border: false
        ,baseCls: 'modx-formpanel'
        ,cls: 'container'
        ,items: [{
            html: '<h2>'+_('votes.management')+'</h2>'
            ,border: false
            ,cls: 'modx-page-header'
        },{
            xtype: 'modx-tabs'
            ,defaults: { border: false ,autoHeight: true }
            ,border: true
            ,items: [{
                title: _('votes')
                ,defaults: { autoHeight: true }
                ,items: [{
                    html: '<p>'+_('votes.management_desc')+'</p>'
                    ,border: false
                    ,bodyCssClass: 'panel-desc'
                },{
                    xtype: 'votes-grid-votes'
                    ,cls: 'main-wrapper'
                    ,preventRender: true
                }]
            }]
        }]
    });
		console.log(config);
    Votes.panel.Home.superclass.constructor.call(this,config);
};
Ext.extend(Votes.panel.Home,MODx.Panel);
Ext.reg('votes-panel-home',Votes.panel.Home);