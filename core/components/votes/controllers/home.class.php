<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of home
 *
 * @author aberdyugin
 */
class VotesHomeManagerController extends VotesManagerController {
    public function process(array $scriptProperties = array()) {
 
    }
    public function getPageTitle() { return $this->modx->lexicon('votes'); }
    public function loadCustomCssJs() {
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/widgets/votes.grid.js');
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/widgets/home.panel.js');
        $this->addLastJavascript($this->votes->config['jsUrl'].'mgr/sections/index.js');
    }
    public function getTemplateFile() { return $this->votes->config['templatesPath'].'home.tpl'; }
}
?>
