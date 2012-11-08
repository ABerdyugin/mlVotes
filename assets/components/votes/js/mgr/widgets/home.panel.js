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
            ,items: [
						{
                title: _('votes.question')
                ,defaults: { autoHeight: true }
                ,items: [{
                    html: '<p>'+_('votes.question.desc')+'</p>'
                    ,border: false
                    ,bodyCssClass: 'panel-desc'
                },{
                    xtype: 'votes-grid-vote-question'
                    ,cls: 'main-wrapper'
                    ,preventRender: true
								}]
            },{
                title: _('votes.category')
                ,defaults: { autoHeight: true }
                ,items: [{
                    html: '<p>'+_('votes.category.desc')+'</p>'
                    ,border: false
                    ,bodyCssClass: 'panel-desc'
                },{
                    xtype: 'votes-grid-vote-category'
                    ,cls: 'main-wrapper'
                    ,preventRender: true
								}]
            },{
                title: _('votes.langs')
                ,defaults: { autoHeight: true }
                ,items: [{
                    html: '<p>'+_('votes.langs.desc')+'</p>'
                    ,border: false
                    ,bodyCssClass: 'panel-desc'
                },{
                    xtype: 'votes-grid-vote-langs'
                    ,cls: 'main-wrapper'
                    ,preventRender: true
                }]
            }]
        }]
    });
    Votes.panel.Home.superclass.constructor.call(this,config);
};
Ext.extend(Votes.panel.Home,MODx.Panel);
Ext.reg('votes-panel-home',Votes.panel.Home);