var Votes = function(config) {
    config = config || {};
    Votes.superclass.constructor.call(this,config);
};
Ext.extend(Votes,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {}
});
Ext.reg('votes',Votes);
Votes = new Votes();
