Votes.grid.VoteCategory = function(config){
	config = config ||{};
	Ext.applyIf(config,{
		id: 'votes-grid-vote-category'
		,url: Votes.config.connectorUrl
		,baseParams: {action: 'mgr/vote/category/getList'}
		,fields: ['id','name','lang','menu']
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
				header: _('votes.category.name')
				,dataIndex: 'name'
				,sortable: true
				,width: 100
				,editor: { xtype: 'textfield' }
		},{
				header: _('votes.category.lang')
				,dataIndex: 'lang'
				,sortable: false
				,width: 350
				,editor: { xtype: 'textfield' }
		}],
		getMenu: function() {
			return [{
					text: _('votes.category.update')
					,handler: this.updateVoteCategory
			},'-',{
					text: _('votes.category.delete')
					,handler: this.removeVoteCategory
			}];
		},
		updateVoteCategory: function(btn,e) {
			if (!this.updateVoteCategoryWindow) {
					this.updateVoteCategoryWindow = MODx.load({
							xtype: 'votes-window-category-update'
							,record: this.menu.record
							,listeners: {
									'success': {fn:this.refresh,scope:this}
							}
					});
			}
			this.updateVoteCategoryWindow.setValues(this.menu.record);
			this.updateVoteCategoryWindow.show(e.target);
		}
	})
	Votes.grid.VoteCategory.superclass.constructor.call(this,config);
};
Ext.extend(Votes.grid.VoteCategory,MODx.grid.Grid);
Ext.reg('votes-grid-vote-category',Votes.grid.VoteCategory)

Votes.window.UpdateVoteCategory = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('votes.langs.update')
        ,url: Votes.config.connectorUrl
        ,baseParams: {
            action: 'mgr/vote/category/update'
        }
        ,fields: [{
            xtype: 'hidden'
            ,name: 'id'
        },{
            xtype: 'textfield'
            ,fieldLabel: _('votes.category.name')
            ,name: 'name'
            ,anchor: '100%'
        },{
            xtype: 'votes-combo-langs'
            ,fieldLabel: _('votes.category.lang')
            ,name: 'short'
            ,anchor: '100%'
        }]
    });
    Votes.window.UpdateVoteCategory.superclass.constructor.call(this,config);
};
Ext.extend(Votes.window.UpdateVoteCategory,MODx.Window);
Ext.reg('votes-window-category-update',Votes.window.UpdateVoteCategory);

