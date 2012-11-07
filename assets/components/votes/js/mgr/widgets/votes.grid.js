Votes.grid.Votes = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'votes-grid-votes'
        ,url: Votes.config.connectorUrl
        ,baseParams: { action: 'mgr/vote/getList' }
        ,fields: ['id','name','short','menu']
        ,paging: true
        ,remoteSort: true
        ,anchor: '97%'
        ,autoExpandColumn: 'name'
        ,columns: [{
            header: _('id')
            ,dataIndex: 'id'
            ,sortable: true
            ,width: 60
        },{
            header: _('votes.name')
            ,dataIndex: 'name'
            ,sortable: true
            ,width: 100
            ,editor: { xtype: 'textfield' }
        },{
            header: _('votes.short')
            ,dataIndex: 'short'
            ,sortable: false
            ,width: 350
            ,editor: { xtype: 'textfield' }
        }]
    });
    Votes.grid.Votes.superclass.constructor.call(this,config)
};
Ext.extend(Votes.grid.Votes,MODx.grid.Grid);
Ext.reg('votes-grid-votes',Votes.grid.Votes);