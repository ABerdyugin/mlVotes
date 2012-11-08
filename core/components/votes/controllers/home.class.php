<?php
class VotesHomeManagerController extends VotesManagerController {
    public function process(array $scriptProperties = array()) {
 
    }
    public function getPageTitle() { return $this->modx->lexicon('votes'); }
    public function loadCustomCssJs() {
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/widgets/langs.combo.js');
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/widgets/langs.grid.js');
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/widgets/question.grid.js');
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/widgets/category.grid.js');
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/widgets/home.panel.js');
        $this->addLastJavascript($this->votes->config['jsUrl'].'mgr/sections/index.js');
    }
    public function getTemplateFile() { return $this->votes->config['templatesPath'].'home.tpl'; }
}
?>
