<?php

include 'configuration.php';
include 'lib/functions.php';
include 'lib/template.class.php';

session_start();

//$mysqli = new MySQLi(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_SCHEMA);

$tpl = new Template();
//$tpl->set('mysqli', $mysqli);

$raw_parts = explode('/', (isset($_GET['url']) ? $_GET['url'] : ''));

switch($raw_parts[0]) {
	case '':
		$tpl->set('page_title', 'Game');
		$tpl->load('client');
		break;
	default:
		header("HTTP/1.0 404 Not Found");
		$tpl->load('404');
		break;
}