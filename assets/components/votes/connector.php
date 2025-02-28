<?php
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/config.core.php';
require_once MODX_CORE_PATH.'config/'.MODX_CONFIG_KEY.'.inc.php';
require_once MODX_CONNECTORS_PATH.'index.php';
 
$corePath = $modx->getOption('votes.core_path',null,$modx->getOption('core_path').'components/votes/');
require_once $corePath.'model/votes/votes.class.php';
$modx->votes = new Votes($modx);
 
$modx->lexicon->load('votes:default');
 
/* handle request */
$path = $modx->getOption('processorsPath',$modx->votes->config,$corePath.'processors/');
$modx->request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));

?>
