<?php
$xpdo_meta_map['VoteLangs']= array (
  'package' => 'votes',
  'version' => NULL,
  'table' => 'vote_langs',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'name' => '',
    'short' => '',
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'short' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '3',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
      'index' => 'index',
    ),
  ),
  'composites' => 
  array (
    'LangCategoty' => 
    array (
      'class' => 'VoteCategory',
      'local' => 'id',
      'foreign' => 'lang',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'LangQuestion' => 
    array (
      'class' => 'VoteQuestion',
      'local' => 'id',
      'foreign' => 'lang',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'LangAnswer' => 
    array (
      'class' => 'VoteAnswer',
      'local' => 'id',
      'foreign' => 'lang',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
