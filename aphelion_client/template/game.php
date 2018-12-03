<div id="game" class="view" style="display: none;">
	<div id="viewport">
		<canvas id="game-background" width="960" height="600"></canvas>
		<canvas id="game-middle" width="960" height="600"></canvas>
		<canvas id="game-screen" width="960" height="600"></canvas>
	</div>
	<div id="main-game-ui" class="clear">
		<div class="entry">
		  <div class="input-prepend">
			<span class="channel add-on">Public</span>
			<input type="text" placeholder="I like to talk..." />
		  </div>
		</div>
        <div class="menu buttons">
            <button class="btn btn-info" data-to="chat">Chat</button>
			<button class="btn btn-info" data-to="player-inventory">Inventory</button>
			<button class="btn btn-info" data-to="player-stats">Stats</button>
            <button class="btn btn-info" data-to="main-game-ui-settings">Settings</button>
			<button class="btn btn-info open-online-list" data-to="online-list">Players</button>
        </div>
		<div class="screens">
			<div id="chat" class="screen">
				<div id="chat-channels">
					<ul class="local messages scrollable"></ul>
					<ul class="global messages scrollable" style="display: none;"></ul>
					<ul class="system messages scrollable" style="display: none;"></ul>
				</div>
				<div id="switch-channels" class="bottom">
					<div class="main-channels btn-group">
						<button class="channel local dark active" data-target="local">
							Local
						</button>
						<!-- <button class="channel dark" data-target="private">
							Private
							<span class="count">45</span>
						</button> -->
						<button class="channel global dark" data-target="global">
							Global
						</button>
						<button class="channel system dark" data-target="system">
							System
						</button>
					</div>
					<!-- <ul class="pm-channels">
						<?php foreach(range(0, 0) as $derp): ?>
						<li class="channel dark" data-from="41">
							<span class="from">Zenpher</span>
							<span class="delete">&times;</span>
						</li>
						<?php endforeach; ?>
					</ul> -->
				</div>
			</div>
			<div id="player-stats"class="screen">
				<div class="top">
					<h4>Character Stats</h4>
				</div>
				<div class="content">
					<p>Level: <span class="level"></span></p>
					<p>Experience: <span class="experience"></span></p>
				</div>
			</div>
			<div id="player-inventory"class="screen">
				<div class="top">
					<h4>Inventory</h4>
				</div>
				<div class="inventory">
					<ul class="items clear scrollable">
						<?php foreach(range(0, 24) as $n): ?>
							<?php if ($n % 2): ?>
								<li class="item" data-item-id="1" data-item-quantity="5">
									<div class="image">
										<img src="<?php $this->put('media_url'); ?>/img/falchion.png" />
									</div>
									<div class="meta">
										<span class="name">
											Haru's Falchion
										</span>
										<span class="type">
											Weapon
										</span>
									</div>
								</li>
							<?php else: ?>
								<li class="item <?php if (!($n % 3)): ?>epic<?php endif; ?>" data-item-id="2" data-item-quantity="5">
									<div class="image">
										<img src="<?php $this->put('media_url'); ?>/img/skull.png" />
									</div>
									<div class="meta">
										<span class="name">
											Dragon Skull
										</span>
										<span class="type">
											Helmet
										</span>
									</div>
								</li>
							<?php endif; ?>
						<?php endforeach; ?>
					</ul>
				</div>
				<script>
					$(function() {
						var prevPagesOrder = [];
						$('.inventory .items').sortable({
							 start: function(event, ui) {
								prevPagesOrder = $(this).sortable('toArray');
							},
							update: function(event, ui) {
								var currentOrder = $(this).sortable('toArray');
								var first = ui.item[0].id;
								var second = currentOrder[prevPagesOrder.indexOf(first)];
								swapOnServer(first, second);
							}
						}).disableSelection();
					});
				</script>
			</div>
			<div id="main-game-ui-settings" class="screen">
				<div class="top">
					<h4>Settings</h4>
				</div>
				<div class="content">
					<div class="setting">
						<p>Music Volume (<span class="current-volume bgm">50</span>):</p>
						<div class="adjust-sound bgm"></div>
					</div>
					<div class="setting">
						<p>Sound Effects Volume (<span class="current-volume sfx">50</span>):</p>
						<div class="adjust-sound sfx"></div>
					</div>
				</div>
			</div>
			<div id="online-list" class="screen">
				<div class="top no-padding">
					<span class="icon column"></span>
					<span class="name column">Player</span>
					<span class="title column">Title</span>
					<span class="level column">Level</span>
					<span class="wins column">Arena Wins</span>
					<span class="total column">
						<span class="count">0</span> Online
					</span>
				</div>
				<ul class="players scrollable"></ul>
			</div>
		</div>
	</div>
	<div id="announcement">Zenpher has won the match.</div>
	<div id="stats">
		<ul>
			<li class="stat ping">
				<span class="icon"><i class="icon-signal icon-white"></i></span>
				<span class="value">00ms</span>
			</li>
		</ul>
	</div>
	<div id="player-bars">
		<div class="health bar">
			<span class="text">HP</span>
			<div class="total">
				<div class="value" style="width: 100%"></div>
			</div>
		</div>
		<div class="experience bar">
			<span class="text">EXP</span>
			<div class="total">
				<div class="value" style="width: 0%"></div>
			</div>
		</div>
	</div>
	<div id="system-buttons">
		<!-- <button class="btn" data-controls-modal="game-menu" data-backdrop="true" data-keyboard="true">Menu</button> -->
	</div>
	<ul id="player-context"></ul>
</div><!-- game-view end -->