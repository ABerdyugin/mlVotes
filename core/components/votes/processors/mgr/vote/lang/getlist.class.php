<?php

class VoteGetLangListProcessor extends modObjectGetListProcessor {
    public $classKey = 'VoteLangs';
    public $languageTopics = array('votes:default');
    public $defaultSortField = 'name';
    public $defaultSortDirection = 'ASC';
    public $objectType = 'votes.vote_langs';
}
return 'VoteGetLangListProcessor';

?>
