<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of index
 *
 * @author aberdyugin
 */
require_once dirname(__FILE__) . '/model/votes/votes.class.php';
abstract class VotesManagerController extends modExtraManagerController {
    /** @var Votes $votes */
    public $votes;
    public function initialize() {
         $this->votes = new Votes($this->modx);

        $this->addCss($this->votes->config['cssUrl'].'mgr.css');
        $this->addJavascript($this->votes->config['jsUrl'].'mgr/votes.js');
        $this->addHtml('<script type="text/javascript">
        Ext.onReady(function() {
            Votes.config = '.$this->modx->toJSON($this->votes->config).';
        });
        </script>');
        return parent::initialize();
    }
    public function getLanguageTopics() {
        return array('votes:default');
    }
    public function checkPermissions() { return true;}
}
class IndexManagerController extends VotesManagerController {
    public static function getDefaultController() { return 'home'; }
}
?>
