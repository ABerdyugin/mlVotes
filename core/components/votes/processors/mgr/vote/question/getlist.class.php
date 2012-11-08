<?php

class VoteGetQuestionListProcessor extends modObjectGetListProcessor {
    public $classKey = 'VoteQuestion';
    public $languageTopics = array('votes:default');
    public $defaultSortField = 'name';
    public $defaultSortDirection = 'ASC';
    public $objectType = 'votes.vote_question';
}
return 'VoteGetQuestionListProcessor';

?>
