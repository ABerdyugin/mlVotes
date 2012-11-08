<?php
class VoteLangsUpdateProcessor extends modObjectUpdateProcessor {
    public $classKey = 'VoteLangs';
    public $languageTopics = array('votes:default');
    public $objectType = 'votes.vote_langs';
}
return 'VoteLangsUpdateProcessor';
?>
