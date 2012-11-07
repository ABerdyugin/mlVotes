<?php
$xpdo_meta_map['VoteCategory']= array (
  'package' => 'votes',
  'version' => NULL,
  'table' => 'vote_category',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'name' => '',
    'lang' => 0,
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
      'index' => 'index',
    ),
    'lang' => 
    array (
      'dbtype' => 'int',
      'precision' => '11',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
    ),
  ),
  'composites' => 
  array (
    'Question' => 
    array (
      'class' => 'VoteQuestion',
      'local' => 'id',
      'foreign' => 'category',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
