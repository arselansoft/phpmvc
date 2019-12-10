<?php
  class App {
    protected $controller = 'Home';
    protected $method     = 'index';
    protected $params     = [];

    public function __construct() {
      $url = $this->parseURL();
      var_dump($url);

    }

    public function parseURL() {
      if (isset($_GET['url'])) {
        // code...
        $url = rtrim($_GET['url'], '/');
        $url = filter_var($url, FILTER_SANITIZE_URL);
        $url = explode('/', $url);
        //$url = $_GET['url'];

        return $url;
      }
    }
  }
?>
