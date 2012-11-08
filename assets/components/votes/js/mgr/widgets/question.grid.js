Votes.grid.VoteQuestion = function(config){
	config = config ||{};
	Ext.applyIf(config,{
		id: 'votes-grid-vote-question'
		,url: Votes.config.connectorUrl
		,baseParams: {action: 'mgr/vote/question/getList'}
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
				header: _('votes.question.name')
				,dataIndex: 'name'
				,sortable: true
				,width: 100
				,editor: { xtype: 'textfield' }
		},{
				header: _('votes.question.lang')
				,dataIndex: 'lang'
				,sortable: false
				,width: 350
				,editor: { xtype: 'textfield' }
		}],
	})
	Votes.grid.VoteQuestion.superclass.constructor.call(this,config);
};
Ext.extend(Votes.grid.VoteQuestion,MODx.grid.Grid);
Ext.reg('votes-grid-vote-question',Votes.grid.VoteQuestion)


