<?php $this->load('header'); ?>
<script>var useFlashSockets = <?php if(isset($_GET['f'])) { echo 'true'; } else { echo 'false'; } ?>;</script>
<div id="client">

	<?php $this->load('browser-warning'); ?>

	<?php $this->load('main-menu'); ?>
	
	<?php $this->load('game'); ?>
	
	<?php $this->load('loading'); ?>
	
	<?php $this->load('modals'); ?>

</div><!-- game end -->

<?php $this->load('footer'); ?>