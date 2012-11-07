<?php
$xpdo_meta_map['VoteAnswer']= array (
  'package' => 'votes',
  'version' => NULL,
  'table' => 'vote_answer',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'question' => NULL,
    'answer' => '',
    'lang' => 0,
    'count' => 0,
  ),
  'fieldMeta' => 
  array (
    'question' => 
    array (
      'dbtype' => 'int',
      'precision' => '255',
      'phptype' => 'integer',
      'null' => false,
      'index' => 'index',
    ),
    'answer' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
      'index' => 'index',
    ),
    'lang' => 
    array (
      'dbtype' => 'int',
      'precision' => '11',
      'phptype' => 'string',
      'null' => false,
      'default' => 0,
    ),
    'count' => 
    array (
      'dbtype' => 'int',
      'precision' => '11',
      'phptype' => 'string',
      'null' => false,
      'default' => 0,
    ),
  ),
);
