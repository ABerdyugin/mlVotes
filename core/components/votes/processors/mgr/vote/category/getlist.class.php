<?php

class VoteGetCategoryListProcessor extends modObjectGetListProcessor {
    public $classKey = 'VoteCategory';
    public $languageTopics = array('votes:default');
    public $defaultSortField = 'name';
    public $defaultSortDirection = 'ASC';
    public $objectType = 'votes.vote_category';
}
return 'VoteGetCategoryListProcessor';

?>
