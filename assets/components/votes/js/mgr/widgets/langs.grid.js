Votes.grid.VoteLangs = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        id: 'votes-grid-vote-langs'
        ,url: Votes.config.connectorUrl
        ,baseParams: { action: 'mgr/vote/lang/getList' }
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
            header: _('votes.langs.name')
            ,dataIndex: 'name'
            ,sortable: true
            ,width: 100
            ,editor: { xtype: 'textfield' }
        },{
            header: _('votes.langs.short')
            ,dataIndex: 'short'
            ,sortable: false
            ,width: 350
            ,editor: { xtype: 'textfield' }
        }],
				getMenu: function() {
					return [{
							text: _('votes.langs.update')
							,handler: this.updateVoteLangs
					},'-',{
							text: _('votes.langs.delete')
							,handler: this.removeVoteLangs
					}];
				},
				updateVoteLangs: function(btn,e) {
					if (!this.updateVoteLangsWindow) {
							this.updateVoteLangsWindow = MODx.load({
									xtype: 'votes-window-lang-update'
									,record: this.menu.record
									,listeners: {
											'success': {fn:this.refresh,scope:this}
									}
							});
					}
					this.updateVoteLangsWindow.setValues(this.menu.record);
					this.updateVoteLangsWindow.show(e.target);
				}
    });
    Votes.grid.VoteLangs.superclass.constructor.call(this,config)
};
Ext.extend(Votes.grid.VoteLangs,MODx.grid.Grid);
Ext.reg('votes-grid-vote-langs',Votes.grid.VoteLangs);

Votes.window.UpdateVoteLangs = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('votes.langs.update')
        ,url: Votes.config.connectorUrl
        ,baseParams: {
            action: 'mgr/vote/lang/update'
        }
        ,fields: [{
            xtype: 'hidden'
            ,name: 'id'
        },{
            xtype: 'textfield'
            ,fieldLabel: _('votes.langs.name')
            ,name: 'name'
            ,anchor: '100%'
        },{
            xtype: 'textfield'
            ,fieldLabel: _('votes.langs.short')
            ,name: 'short'
            ,anchor: '100%'
        }]
    });
    Votes.window.UpdateVoteLangs.superclass.constructor.call(this,config);
};
Ext.extend(Votes.window.UpdateVoteLangs,MODx.Window);
Ext.reg('votes-window-lang-update',Votes.window.UpdateVoteLangs);

