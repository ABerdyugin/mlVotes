<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$dood = $modx->getService('doodles','Doodles',$modx->getOption('doodles.core_path',null,$modx->getOption('core_path').'components/doodles/').'model/doodles/',$scriptProperties);
if (!($dood instanceof Doodles)) return '';

?>
