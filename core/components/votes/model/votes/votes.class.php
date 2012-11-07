<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of votes
 *
 * @author aberdyugin
 */
class Votes {
	public $modx;
	public $config = array();
	function __construct(modX &$modx, array $config = array()) {
		$this->modx =& $modx;
		
		$basePath = $this->modx->getOption('votes.core_path',$config,  $this->modx->getOption('core_path').'components/votes/');
		$assetsUrl = $this->modx->getOption('votes.assets_url',$config,  $this->modx->getOption('assets_url').'components/votes/');
		$this->config = array_merge(array(
				'basePath' => $basePath,
				'corePath' => $basePath,
				'modelPath' => $basePath.'model/',
				'processorsPath' => $basePath.'processors/',
				'templatesPath' => $basePath.'templates/',
				'chunksPath' => $basePath.'chunks/',
				'jsUrl' => $assetsUrl.'js/',
				'cssUrl' => $assetsUrl.'css/',
				'assetsUrl' => $assetsUrl,
				'cnnectorUrl' => $assetsUrl.'connector.php',
		), $config);
		$this->modx->addPackage('votes',$this->config['modelPath']);
	}
}

?>
