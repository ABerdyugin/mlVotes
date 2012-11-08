Votes.combo.VoteLangsList = function(config) {
    config = config || {};
    Ext.applyIf(config, {
    name: 'langs',
		hiddenName: 'lang',
		displayField: 'name',
		valueField: 'id',
		fields: ['id','name'],
		forceSelection: true,
		typeAhead: true,
		editable: false,
		allowBlank: true,
		autocomplete: true,
		url: Votes.config.connectorUrl,
		baseParams: {
            action: 'mgr/vote/lang/getList',
			combo: true
        }
    });
	
    Votes.combo.VoteLangsList.superclass.constructor.call(this, config);
};

Ext.extend(Votes.combo.VoteLangsList, MODx.combo.ComboBox);
Ext.reg('votes-combo-langs', Votes.combo.VoteLangsList);
