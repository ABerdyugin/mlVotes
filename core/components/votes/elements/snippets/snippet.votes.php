<?php
$vote = $modx->getService('votes','Votes',$modx->getOption('votes.core_path',null,$modx->getOption('core_path').'components/votes/').'model/votes/',$scriptProperties);
if (!($vote instanceof Votes)) return '';

/* setup default properties */
$tpl = $modx->getOption('tpl',$scriptProperties,'rowTpl');
$sort = $modx->getOption('sort',$scriptProperties,'name');
$dir = $modx->getOption('dir',$scriptProperties,'ASC');

$output = 'Test: ';
//$m = $modx->getManager();
//$output .= $m->createObjectContainer('VoteLangs') ? 'Table created.' : 'Table not created.';
//$output .= $m->createObjectContainer('VoteCategory') ? 'Table created.' : 'Table not created.';
//$output .= $m->createObjectContainer('VoteQuestion') ? 'Table created.' : 'Table not created.';
//$output .= $m->createObjectContainer('VoteAnswer') ? 'Table created.' : 'Table not created.';

return $output;